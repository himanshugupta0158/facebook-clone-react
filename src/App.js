import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LoginHeader } from './Login/LoginHeader';
import { Login } from './Login/Login';
import { RegisterHeader } from './Register/RegisterHeader';

import { Register } from './Register/Register';
import { HomeHeader } from './FacebookClonePages/Header/HomeHeader';
import { auth } from './firebase-config';
import { Sidebar } from './FacebookClonePages/Sidebar/Sidebar';
import Sidebar2 from './FacebookClonePages/Sidebar/Sidebar2';
import { Posts } from './FacebookClonePages/Posts/Posts';

function App() {

  const [user, setUser] = useState('');

  auth.onAuthStateChanged((authUser) => {
      if(authUser){
        setUser(authUser);
      }else{
        setUser(false);
      }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<>
          <LoginHeader />
          <Login />
        </>} />
        <Route path='/register' element={<>
          <RegisterHeader />
          <Register />
        </>} />
        <Route path='/' element={<>
          <HomeHeader user={user} />
          <div className='app__page'>
            <Sidebar user={user} />
            <div className='app__posts'>
              < Posts user={user} />
            </div>
            < Sidebar2 />
          </div>
        </>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
