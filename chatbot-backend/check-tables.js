import pg from 'pg';

const pool = new pg.Pool({
  user: 'spirolink_user',
  password: 'StrongPassword123!@#',
  host: 'localhost',
  port: 5432,
  database: 'theepan'
});

(async () => {
  try {
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    console.log('\n📊 Tables in database:');
    if (result.rows.length === 0) {
      console.log('❌ NO TABLES FOUND - Need to initialize');
    } else {
      result.rows.forEach(row => console.log('  ✓', row.table_name));
    }
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
})();
