import fetch from 'node-fetch';

const signupData = {
  email: "alice@example.com",
  username: "alice_wonderland",
  password: "SecurePass456!",
  first_name: "Alice",
  last_name: "Johnson",
  phone: "+9876543210",
  country: "United States",
  company_name: "Innovation Labs"
};

try {
  const response = await fetch('http://localhost:5001/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(signupData)
  });

  const result = await response.json();
  console.log('Status:', response.status);
  console.log('Response:', JSON.stringify(result, null, 2));
} catch (err) {
  console.error('Error:', err.message);
}
