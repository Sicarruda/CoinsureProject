import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Registration from './pages/Registration';
import UserPage from './pages/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path='/userPage' element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
