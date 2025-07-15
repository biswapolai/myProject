import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // 👈 import your login page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add more routes below */}
      </Routes>
    </Router>
  );
};

export default App;
