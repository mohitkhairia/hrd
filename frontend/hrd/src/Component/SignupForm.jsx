
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email };
      console.log(newUser);
      await axios.post('http://localhost:5000/api/users', newUser);
      alert('User added successfully!');
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Sign Up</button>
        </form>
    </div>
  );
};

export default SignupForm;
