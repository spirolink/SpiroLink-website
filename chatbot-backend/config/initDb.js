import pool from '../config/db.js';

const initializeDatabase = async () => {
  try {
    console.log('🔧 Initializing database schema...');

    // Create payments table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        user_email TEXT NOT NULL,
        user_name TEXT,
        amount DECIMAL(10, 2) NOT NULL,
        currency TEXT NOT NULL DEFAULT 'INR',
        gateway TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        transaction_id TEXT UNIQUE,
        invoice_number TEXT UNIQUE,
        payment_method TEXT,
        razorpay_order_id TEXT,
        razorpay_payment_id TEXT,
        stripe_payment_intent_id TEXT,
        stripe_session_id TEXT,
        description TEXT,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        paid_at TIMESTAMP
      );
    `);
    console.log('✅ payments table initialized');

    // Create invoices table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS invoices (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        payment_id UUID NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
        invoice_number TEXT NOT NULL UNIQUE,
        user_email TEXT NOT NULL,
        user_name TEXT,
        amount DECIMAL(10, 2) NOT NULL,
        currency TEXT NOT NULL,
        status TEXT DEFAULT 'draft',
        pdf_url TEXT,
        sent_at TIMESTAMP,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ invoices table initialized');

    // Create payment logs table for audit trail
    await pool.query(`
      CREATE TABLE IF NOT EXISTS payment_logs (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        payment_id UUID NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
        event_type TEXT NOT NULL,
        status TEXT,
        message TEXT,
        response_data JSONB,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);
    console.log('✅ payment_logs table initialized');

    // Create indexes for better performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payments_email ON payments(user_email);
      CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
      CREATE INDEX IF NOT EXISTS idx_payments_gateway ON payments(gateway);
      CREATE INDEX IF NOT EXISTS idx_invoices_payment_id ON invoices(payment_id);
      CREATE INDEX IF NOT EXISTS idx_invoices_email ON invoices(user_email);
      CREATE INDEX IF NOT EXISTS idx_payment_logs_payment_id ON payment_logs(payment_id);
    `);
    console.log('✅ Database indexes created');

    console.log('✅ Database initialization complete');
    return true;
  } catch (error) {
    console.error('❌ Database initialization error:', error);
    throw error;
  }
};

export default initializeDatabase;
export { initializeDatabase };
