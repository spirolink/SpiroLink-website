import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type PaymentLookup = {
  payment_id: string;
  status: string;
  amount?: string | number;
  email?: string;
  transaction_id?: string | null;
};

export default function PaymentSuccess() {
  const location = useLocation();
  const sessionId = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('session_id') || '';
  }, [location.search]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [payment, setPayment] = useState<PaymentLookup | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError('');

        if (!sessionId) {
          setError('Missing Stripe session id.');
          return;
        }

        const response = await fetch(`/api/payment/stripe/session/${encodeURIComponent(sessionId)}`);
        const contentType = response.headers.get('content-type') || '';

        if (!response.ok) {
          if (contentType.includes('application/json')) {
            const data = await response.json();
            throw new Error(data.error || 'Failed to fetch payment details');
          }
          const text = await response.text();
          throw new Error(text.slice(0, 200) || 'Failed to fetch payment details');
        }

        if (!contentType.includes('application/json')) {
          throw new Error('Server returned unexpected response');
        }

        const data = (await response.json()) as PaymentLookup;
        setPayment(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-12">
      <div className="max-w-[720px] mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold mb-2">Payment successful</h1>
        <p className="text-sm text-slate-500 mb-7">
          Thanks — your payment has been received. You’ll also get a confirmation email.
        </p>

        {loading ? (
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700 mb-6">
            Loading payment details...
          </div>
        ) : null}

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 mb-6">
            {error}
          </div>
        ) : null}

        {payment ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 mb-6">
            <div>
              Status: <span className="font-semibold">{payment.status}</span>
            </div>
            <div>
              Payment ID: <span className="font-mono">{payment.payment_id}</span>
            </div>
            {payment.transaction_id ? (
              <div>
                Transaction ID: <span className="font-mono">{payment.transaction_id}</span>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex gap-3">
          <Link
            to="/payment"
            className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Make another payment
          </Link>
          <Link
            to="/"
            className="px-4 py-2 text-sm font-semibold rounded-md border border-slate-300 hover:bg-slate-50"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
