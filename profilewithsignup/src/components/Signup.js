import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!username || !email || !password) {
      setError('All fields are mandatory.');
      return;
    }

    // Generate access token
    const accessToken = generateAccessToken();

    // Create user object with properties and access token
    const user = {
      username,
      email,
      password,
      accessToken,
    };

    // Store user object in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Reset form inputs and show success message
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
    setSuccess('Signup successful! Redirecting to profile...');

    // Redirect to profile page after 2 seconds
    setTimeout(() => {
      history.push('/profile');
    }, 2000);
  };

  const generateAccessToken = () => {
    // Generate a random 16-byte string for the access token
    // You can use any random string generation technique you prefer
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      accessToken += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accessToken;
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}

export default Signup;
