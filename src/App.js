import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom'
import breaking from './Pages/breaking';
import parks from './Pages/parks';
import home from './Pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<home />} />
        <Route path='/breaking' element={<breaking />} />
        <Route path='/parks' element={<parks />} />
      </Routes>
    </Router>
  );
}

export default App;
