import React from 'react';
import './LoginHeader.css';
import {Link} from 'react-router-dom';

export const LoginHeader = () => {
  return (
    <div className="header">
      <Link className="link" to="/" style={{ textDecoration: 'none' }}>
          <div className="facebooktext">
            facebook
          </div>
      </Link>
      
      <Link className="register" to="/register">
          <button className="header__button">
            Create New Account
          </button>
      </Link>
      
    </div>
  )
}
