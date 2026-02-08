import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('render.com') 
    ? { rejectUnauthorized: false }
    : false,
});

const createPaymentsTable = async () => {
  try {
    console.log('🔧 Creating payments table...');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS payments (
        id SERIAL PRIMARY KEY,
        payment_id VARCHAR(255) UNIQUE NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        email VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        service_type VARCHAR(100) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        currency VARCHAR(3) DEFAULT 'usd',
        status VARCHAR(50) DEFAULT 'pending',
        stripe_session_id VARCHAR(255),
        stripe_payment_intent VARCHAR(255),
        transaction_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        metadata JSONB
      );
    `);

    // Create indexes for faster queries
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_id ON payments(payment_id);
      CREATE INDEX IF NOT EXISTS idx_user_id ON payments(user_id);
      CREATE INDEX IF NOT EXISTS idx_status ON payments(status);
      CREATE INDEX IF NOT EXISTS idx_created_at ON payments(created_at);
      CREATE INDEX IF NOT EXISTS idx_stripe_session_id ON payments(stripe_session_id);
      CREATE INDEX IF NOT EXISTS idx_stripe_payment_intent ON payments(stripe_payment_intent);
    `);

    console.log('✅ Payments table created successfully!');
    
    // Verify table was created
    const result = await pool.query(
      "SELECT table_name FROM information_schema.tables WHERE table_name='payments'"
    );
    
    if (result.rows.length > 0) {
      console.log('✅ Verified: payments table exists in database');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating payments table:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

createPaymentsTable();
