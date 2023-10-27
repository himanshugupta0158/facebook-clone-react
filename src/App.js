import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LoginHeader } from './Login/LoginHeader';
import { Login } from './Login/Login';
import { RegisterHeader } from './Register/RegisterHeader';

import { Register } from './Register/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginHeader />} /> */}
        <Route path='/login' element={<>
          <LoginHeader />
          <Login />
        </>} />
        <Route path='/register' element={<>
          <RegisterHeader />
          <Register />
        </>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
