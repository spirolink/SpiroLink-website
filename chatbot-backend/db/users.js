import pool from '../config/db.js';
import crypto from 'crypto';

// Hash password using crypto (for demo - use bcrypt in production)
const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// Create new user
export const createUser = async (data) => {
  try {
    const {
      email,
      username,
      password,
      first_name,
      last_name,
      phone,
      country,
      company_name
    } = data;

    const password_hash = hashPassword(password);
    const full_name = `${first_name || ''} ${last_name || ''}`.trim();

    const result = await pool.query(
      `INSERT INTO users (
        email, username, password_hash, first_name, last_name, 
        full_name, phone, country, company_name, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
      RETURNING id, email, username, first_name, last_name, full_name, 
                created_at, is_verified, is_active`,
      [email, username, password_hash, first_name, last_name, full_name, phone, country, company_name]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Get user by email
export const getUserByEmail = async (email) => {
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Get user by username
export const getUserByUsername = async (username) => {
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Get user by ID
export const getUserById = async (id) => {
  try {
    const result = await pool.query(
      'SELECT id, email, username, first_name, last_name, full_name, phone, company_name, country, profile_picture, bio, is_verified, is_active, last_login, created_at, updated_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Verify password
export const verifyPassword = (password, hash) => {
  const passwordHash = hashPassword(password);
  return passwordHash === hash;
};

// Update user profile
export const updateUserProfile = async (userId, data) => {
  try {
    const {
      first_name,
      last_name,
      phone,
      company_name,
      country,
      bio,
      profile_picture
    } = data;

    const full_name = `${first_name || ''} ${last_name || ''}`.trim();

    const result = await pool.query(
      `UPDATE users SET 
        first_name = COALESCE($1, first_name),
        last_name = COALESCE($2, last_name),
        full_name = $3,
        phone = COALESCE($4, phone),
        company_name = COALESCE($5, company_name),
        country = COALESCE($6, country),
        bio = COALESCE($7, bio),
        profile_picture = COALESCE($8, profile_picture),
        updated_at = NOW()
      WHERE id = $9
      RETURNING id, email, username, first_name, last_name, full_name, phone, company_name, country, profile_picture, bio, is_verified, is_active, updated_at`,
      [first_name, last_name, full_name, phone, company_name, country, bio, profile_picture, userId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Update last login
export const updateLastLogin = async (userId) => {
  try {
    await pool.query(
      'UPDATE users SET last_login = NOW() WHERE id = $1',
      [userId]
    );
  } catch (error) {
    throw error;
  }
};

// Mark email as verified
export const verifyUserEmail = async (userId) => {
  try {
    const result = await pool.query(
      'UPDATE users SET is_verified = TRUE, verification_token = NULL, verification_token_expires = NULL, updated_at = NOW() WHERE id = $1 RETURNING *',
      [userId]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Set verification token
export const setVerificationToken = async (userId, token, expiresIn = 24) => {
  try {
    const expiresAt = new Date(Date.now() + expiresIn * 60 * 60 * 1000);
    await pool.query(
      'UPDATE users SET verification_token = $1, verification_token_expires = $2 WHERE id = $3',
      [token, expiresAt, userId]
    );
  } catch (error) {
    throw error;
  }
};

// Get all users (admin only)
export const getAllUsers = async (limit = 50, offset = 0) => {
  try {
    const result = await pool.query(
      `SELECT id, email, username, first_name, last_name, full_name, is_verified, 
              is_active, last_login, created_at FROM users 
       ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
      [limit, offset]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Delete user
export const deleteUser = async (userId) => {
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);
  } catch (error) {
    throw error;
  }
};
