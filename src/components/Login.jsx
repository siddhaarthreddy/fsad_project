import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthStyles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      
      // Store user initial (first letter of name or email)
      const userInitial = response.data.name 
        ? response.data.name.charAt(0).toUpperCase() 
        : email.charAt(0).toUpperCase();
      localStorage.setItem('userInitial', userInitial);
      
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || 'Invalid credentials'));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Login</h1>

        <div className="auth-input-group">
          <label className="auth-label" htmlFor="email">Email</label>
          <input
            className="auth-input"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="auth-input-group">
          <label className="auth-label" htmlFor="password">Password</label>
          <input
            className="auth-input"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="auth-button" onClick={handleLogin}>Login</button>

        <p className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;