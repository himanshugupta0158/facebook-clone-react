import React from 'react';
import './Register.css';

export const Register = () => {
  return (
    <div className="register">
        <div className="register__container">
            <h1>Create A New Account</h1>
            <h3>Its quick and easy</h3>
            <form>
                <center>
                    <input type="text" className='register__name' placeholder='First Name' />
                    <input type="text" className='register__name' placeholder='Last Name' />
                </center>
                <center>
                    <input type="email" placeholder='Email' />
                </center>
                <center>
                    <input type="password" placeholder='Password' />
                </center>
                
                <h5 className="register__date">Date Of Birth</h5>
                <input type="date" />
                
                <h5 className="register__gender">Gender</h5>
                <div className="register__radiocontainer">
                    <input type="radio" name='gender' value="Male" />
                    <label>Male</label>
                    <input type="radio" name='gender' value="Female" />
                    <label>Female</label>
                    <input type="radio" name='gender' value="Other" />
                    <label>Other</label>
                </div>

                <p className="register__policy">
                    By clicking Sign Up, you agree to our {" "}
                    <span>Term, data Polocu</span> and <span>Cookie Policy</span>.
                    You may recieve SMS notification from us and can opt out at any time.
                </p>
                
                <center>
                    <button type='submit' className="register__register">
                        Submit
                    </button>
                </center>
            </form>
        </div>
    </div>
  )
}
