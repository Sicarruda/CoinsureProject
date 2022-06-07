import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          
        </Routes>
    </div>
  );
}

export default App;
