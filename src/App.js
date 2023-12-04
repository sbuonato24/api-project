import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom'
import Breaking from './Pages/breaking';
import Parks from './Pages/parks';
import Home from './Pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='index' exact element={<Home />} />
        <Route path='/breaking' element={<Breaking />} />
        <Route path='/parks' element={<Parks />} />
      </Routes>
    </Router>
  );
}

export default App;
