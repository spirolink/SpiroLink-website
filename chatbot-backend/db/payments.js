import pool from '../config/db.js';

/**
 * Payment Database Operations
 */

export const createPayment = async (paymentData) => {
  const {
    user_email,
    user_name,
    amount,
    currency,
    gateway,
    transaction_id,
    invoice_number,
    payment_method,
    description,
    metadata = {}
  } = paymentData;

  try {
    const result = await pool.query(
      `INSERT INTO payments 
       (user_email, user_name, amount, currency, gateway, transaction_id, invoice_number, payment_method, description, metadata, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING id, created_at`,
      [user_email, user_name, amount, currency, gateway, transaction_id, invoice_number, payment_method, description, JSON.stringify(metadata), 'completed']
    );
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error creating payment:', error);
    throw error;
  }
};

export const getPaymentByTransactionId = async (transactionId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE transaction_id = $1',
      [transactionId]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('❌ Error fetching payment:', error);
    throw error;
  }
};

export const getPaymentsByEmail = async (email) => {
  try {
    const result = await pool.query(
      'SELECT * FROM payments WHERE user_email = $1 ORDER BY created_at DESC',
      [email]
    );
    return result.rows;
  } catch (error) {
    console.error('❌ Error fetching payments:', error);
    throw error;
  }
};

export const updatePaymentStatus = async (paymentId, status) => {
  try {
    const result = await pool.query(
      `UPDATE payments 
       SET status = $1, updated_at = NOW(), paid_at = CASE WHEN $1 = 'completed' THEN NOW() ELSE paid_at END
       WHERE id = $2
       RETURNING *`,
      [status, paymentId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error updating payment status:', error);
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  const {
    payment_id,
    invoice_number,
    user_email,
    user_name,
    amount,
    currency
  } = invoiceData;

  try {
    const result = await pool.query(
      `INSERT INTO invoices 
       (payment_id, invoice_number, user_email, user_name, amount, currency, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'draft')
       RETURNING *`,
      [payment_id, invoice_number, user_email, user_name, amount, currency]
    );
    return result.rows[0];
  } catch (error) {
    console.error('❌ Error creating invoice:', error);
    throw error;
  }
};

export const addPaymentLog = async (paymentId, eventType, status, message, responseData = null) => {
  try {
    await pool.query(
      `INSERT INTO payment_logs 
       (payment_id, event_type, status, message, response_data)
       VALUES ($1, $2, $3, $4, $5)`,
      [paymentId, eventType, status, message, JSON.stringify(responseData)]
    );
  } catch (error) {
    console.error('❌ Error adding payment log:', error);
    throw error;
  }
};

export const getPaymentStats = async () => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) as total_payments,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COUNT(CASE WHEN status = 'failed' THEN 1 END) as failed,
        SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) as total_amount,
        COUNT(DISTINCT user_email) as unique_customers
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
  getPaymentByTransactionId,
  getPaymentsByEmail,
  updatePaymentStatus,
  createInvoice,
  addPaymentLog,
  getPaymentStats
};
