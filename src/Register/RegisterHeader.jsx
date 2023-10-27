import React from 'react';
import './RegisterHeader.css';
import { Link } from 'react-router-dom';

export const RegisterHeader = () => {
  return (
    <div className="header">
        <div className="header__left">
            <Link className="link" to="/" style={{ textDecoration: 'none' }}>
                <div className="facebooktext">
                facebook
                </div>
            </Link>

        </div>
        <div className="header__right">
            <form>
                <input type="email" className='header__input1' placeholder='Email' />

                <input type="password" className='header__input2' placeholder='Password' />

                <button type="submit" className='header__submit'>Log In</button>
            </form>
        </div>
    </div>
  )
}
