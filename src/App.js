import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageSelector from './pages/PageSelector';
import LoginForm from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/choose_project" element={<PageSelector />} />
      </Routes>
    </Router>
  );
}

export default App;