import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import { auth } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate('');
    const [password, setPassword] = useState('');

    const loginSubmit = (e) => {
        e.preventDefault();

        // Get the auth object
        // const auth = getAuth();

        // Sign in the user with their email address and password
        signInWithEmailAndPassword(auth, email, password)
        .then((auth_data) => {
            console.log(auth_data);
            navigate("/");
        })
        .catch((e) => {
            if(e.message === "The password is invalid or the user does not have password")
        {
            alert("Please check your credentials again");
        }
        else if (e.message === "There is no user record corresponding to this indentifier. The user may have been deleted."){
            navigate("/register");
            window.scrollTo({
                top: document.body.scrollHeight,
                left : 0,
                behavior : "smooth",
            });
        }
        else {
            alert(e.message);
        }
        })

    };

  return (
    <div className="login">
        <div className="login__container">
            <h3>Log In To facebook</h3>
            <form>
                <center>
                    <input 
                        type="text" 
                        placeholder='Email Address' 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </center>
                <center>
                    <input 
                        type="password" 
                        placeholder='Password' 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </center>
                <center>
                    <button className="login__login" type='submit' onClick={loginSubmit}>
                        Log In
                    </button>
                </center>

                <center>
                    <h6>Forgotten Password?</h6>
                </center>
                <center>
                    <hr />
                </center>
                <center>
                    <Link to="/register" style={{textDecoration: 'none'}}>
                        <button className="login__createNewAccount">
                            Create New Account
                        </button>
                    </Link>
                </center>
            </form>
        </div>
    </div>
  )
}
