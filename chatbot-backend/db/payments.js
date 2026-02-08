import pool from '../config/db.js';

/**
 * Payment Database Operations - Real-time Stripe Integration
 */

export const createPayment = async (paymentData) => {
  const {
    payment_id,
    user_id,
    email,
    name,
    service_type,
    amount,
    currency = 'usd',
    stripe_session_id = null,
    stripe_payment_intent = null,
    metadata = null,
  } = paymentData;

  try {
    const result = await pool.query(
      `INSERT INTO payments (
        payment_id, user_id, email, name, service_type, 
        amount, currency, stripe_session_id, stripe_payment_intent, 
        status, metadata
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *`,
      [
        payment_id,
        user_id,
        email,
        name,
        service_type,
        amount,
        currency,
        stripe_session_id,
        stripe_payment_intent,
        'pending',
        metadata ? JSON.stringify(metadata) : null,
      ]
    );
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error creating payment:', error);
    throw error;
  }
};

export const getPayment = async (payment_id) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE payment_id = $1',
      [payment_id]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching payment:', error);
    throw error;
  }
};

export const getPaymentByStripeSession = async (stripe_session_id) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE stripe_session_id = $1',
      [stripe_session_id]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching payment by session:', error);
    throw error;
  }
};

export const getPaymentByStripeIntent = async (stripe_payment_intent) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE stripe_payment_intent = $1',
      [stripe_payment_intent]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching payment by intent:', error);
    throw error;
  }
};

export const updatePaymentStatus = async (payment_id, status, transaction_id = null) => {
  try {
    const result = await pool.query(
      `UPDATE payments 
       SET status = $1, updated_at = CURRENT_TIMESTAMP, transaction_id = $2
       WHERE payment_id = $3
       RETURNING *`,
      [status, transaction_id, payment_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error updating payment status:', error);
    throw error;
  }
};
export const getUserPayments = async (user_id) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE user_id = $1 ORDER BY created_at DESC',
      [user_id]
    );
    return result.rows;
  } catch (error) {
    console.error('❌ Error fetching user payments:', error);
    throw error;
  }
};

export const getPaymentStats = async () => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) as total_payments,
        COUNT(CASE WHEN status = 'succeeded' THEN 1 END) as successful_payments,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_payments,
        COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed_payments,
        SUM(CASE WHEN status = 'succeeded' THEN amount ELSE 0 END) as total_revenue
      FROM payments
    `);
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error fetching payment stats:', error);
    throw error;
  }
};

export default {
  createPayment,
  getPayment,
  getPaymentByStripeSession,
  getPaymentByStripeIntent,
  updatePaymentStatus,
  getUserPayments,
  getPaymentStats
};
