import React, { useState, useEffect } from 'react';
import { CreditCard, Loader, CheckCircle, AlertCircle } from 'lucide-react';

interface PaymentStatus {
  status: 'idle' | 'pending' | 'processing' | 'succeeded' | 'failed';
  transactionId?: string;
  error?: string;
}

export default function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'PON & FTTH',
    amount: '1',
  });

  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({
    status: 'idle',
  });

  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [pollCount, setPollCount] = useState(0);

  const serviceTypes = [
    'PON & FTTH',
    'Microwave Network',
    'Data Center Services',
    'Consulting',
    'Training',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus({ status: 'pending' });
    setPollCount(0);

    try {
      // Determine the API URL
      const apiUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:5001'
        : 'https://spirolink-website.onrender.com';

      console.log('Creating payment intent with API URL:', apiUrl);

      const response = await fetch(`${apiUrl}/api/payment/stripe/create-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceType: formData.serviceType,
          amount: parseFloat(formData.amount),
        }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment');
      }

      setPaymentId(data.paymentId);
      setPaymentStatus({ status: 'processing' });

      // Poll for status updates
      pollPaymentStatus(data.paymentId, apiUrl);

      // Redirect to Stripe checkout after a brief delay
      setTimeout(() => {
        if (data.sessionId) {
          window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
        }
      }, 1000);
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus({
        status: 'failed',
        error: error instanceof Error ? error.message : 'Payment failed. Please try again.',
      });
    }
  };

  const pollPaymentStatus = (pId: string, apiUrl: string) => {
    const pollInterval = setInterval(async () => {
      try {
        setPollCount((prev) => prev + 1);

        const response = await fetch(`${apiUrl}/api/payment/status/${pId}`);
        const data = await response.json();

        console.log('Poll response:', data);

        if (data.status === 'succeeded') {
          setPaymentStatus({
            status: 'succeeded',
            transactionId: data.transaction_id || data.stripe_session_id,
          });
          clearInterval(pollInterval);
        } else if (data.status === 'failed') {
          setPaymentStatus({
            status: 'failed',
            error: 'Payment was declined. Please try again.',
          });
          clearInterval(pollInterval);
        }

        // Stop polling after 2 minutes
        if (pollCount > 60) {
          clearInterval(pollInterval);
        }
      } catch (error) {
        console.error('Poll error:', error);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <CreditCard className="text-blue-600" size={32} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">SPIROLINK – Secure Payment</h1>
          <p className="text-gray-600 mt-2 text-sm">
            Use this page to make payments for network design, consulting, training, or implementation services.
          </p>
        </div>

        {/* Status Messages */}
        {paymentStatus.status === 'failed' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="text-red-600 mt-0.5" size={20} />
            <div>
              <p className="text-red-800 font-medium">Payment failed. Please try again.</p>
              {paymentStatus.error && (
                <p className="text-red-700 text-sm mt-1">{paymentStatus.error}</p>
              )}
            </div>
          </div>
        )}

        {paymentStatus.status === 'succeeded' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
            <CheckCircle className="text-green-600 mt-0.5" size={20} />
            <div>
              <p className="text-green-800 font-medium">Payment successful!</p>
              {paymentStatus.transactionId && (
                <p className="text-green-700 text-sm mt-1">
                  Transaction ID: {paymentStatus.transactionId}
                </p>
              )}
            </div>
          </div>
        )}

        {(paymentStatus.status === 'pending' || paymentStatus.status === 'processing') && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-3">
            <Loader className="text-blue-600 mt-0.5 animate-spin" size={20} />
            <div>
              <p className="text-blue-800 font-medium">Payment {paymentStatus.status}...</p>
              <p className="text-blue-700 text-sm mt-1">Please wait while we process your payment.</p>
            </div>
          </div>
        )}

        {/* Form */}
        {paymentStatus.status !== 'succeeded' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={paymentStatus.status !== 'idle' && paymentStatus.status !== 'failed'}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={paymentStatus.status !== 'idle' && paymentStatus.status !== 'failed'}
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={paymentStatus.status !== 'idle' && paymentStatus.status !== 'failed'}
              >
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Payment Amount (USD)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
                min="1"
                step="0.01"
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={paymentStatus.status !== 'idle' && paymentStatus.status !== 'failed'}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={paymentStatus.status === 'processing' || paymentStatus.status === 'pending'}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
            >
              {paymentStatus.status === 'processing' || paymentStatus.status === 'pending' ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CreditCard size={20} />
                  <span>Proceed to Payment</span>
                </>
              )}
            </button>

            {/* Info */}
            <p className="text-center text-sm text-gray-600 mt-4">
              You will be redirected to a secure Stripe payment page in the next step.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
