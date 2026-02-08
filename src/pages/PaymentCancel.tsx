import { Link } from 'react-router-dom';

export default function PaymentCancel() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 px-4 py-12">
      <div className="max-w-[720px] mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-xl font-semibold mb-2">Payment cancelled</h1>
        <p className="text-sm text-slate-500 mb-7">
          Your payment was cancelled. No charge was made.
        </p>

        <div className="flex gap-3">
          <Link
            to="/payment"
            className="px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Try again
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
