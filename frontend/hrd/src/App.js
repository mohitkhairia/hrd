// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupForm from './Component/SignupForm';
import UserList from './Component/UserList';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', gap: '10px' }}>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/">User List</Link>
            </li>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
