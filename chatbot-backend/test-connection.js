import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'spirolink_user',
  password: 'StrongPassword123!@#',
  host: 'localhost',
  port: 5432,
  database: 'theepan',
  connectionTimeoutMillis: 5000,
});

try {
  const result = await pool.query('SELECT NOW()');
  console.log('✅ SUCCESS! Database connected');
  console.log('Timestamp:', result.rows[0].now);
  await pool.end();
  process.exit(0);
} catch (error) {
  console.error('❌ ERROR:', error.message);
  process.exit(1);
}
