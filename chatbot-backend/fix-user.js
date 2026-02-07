import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'theepan'
});

(async () => {
  try {
    console.log('Fixing spirolink_user permissions...\n');
    
    const commands = [
      'ALTER USER spirolink_user WITH LOGIN;',
      "ALTER USER spirolink_user WITH PASSWORD 'StrongPassword123!@#';",
      'GRANT CONNECT ON DATABASE theepan TO spirolink_user;'
    ];
    
    for (const cmd of commands) {
      await pool.query(cmd);
      console.log('✓ Executed:', cmd);
    }
    
    console.log('\n✅ User permissions fixed! Tables can now be created.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
})();
