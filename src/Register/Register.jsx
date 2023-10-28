import React, { useState } from "react";
import "./Register.css";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Register = () => {
  const navigate = useNavigate("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const SubmitRegister = (e) => {

    e.preventDefault();

    // Create a new user with the provided information
    createUserWithEmailAndPassword(auth, email, password)
    .then((user_auth) => {
        const user = user_auth.user;
        if(user) {
            updateProfile(user, {
                displayName : firstname + " "+ lastname,
            }).then((s) => {
                // Save the user's details to the database , It requires permission from firebase firestore.
                // const userRef = doc(db, "users", user.uid);
                // setDoc(userRef, {
                //     firstname,
                //     lastname,
                //     dateOfBirth,
                //     gender,
                // });

                // Redirect the user to the home page
                navigate("/login");
            })
        }
    })
    .catch((e) => {
        alert(e.message);
    })
    

  };

  return (
    <div className="register">
      <div className="register__container">
        <h1>Create A New Account</h1>
        <h3>Its quick and easy</h3>
        <form>
          <center>
            <input
              type="text"
              className="register__name"
              placeholder="First Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              className="register__name"
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </center>
          <center>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          </center>
          <center>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          </center>

          <h5 className="register__date">Date Of Birth</h5>
          <input type="date" className="register__date" onChange={(e) => setDateOfBirth(e.target.value)} />

          <h5 className="register__gender">Gender</h5>
          <div className="register__radiocontainer">
            <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
            <label>Male</label>
            <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>
            <label>Female</label>
            <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)}/>
            <label>Other</label>
          </div>

          <p className="register__policy">
            By clicking Sign Up, you agree to our <span>Term, data Policy</span>{" "}
            and <span>Cookie Policy</span>. You may recieve SMS notification
            from us and can opt out at any time.
          </p>

          <center>
            <button
              type="submit"
              className="register__register"
              onClick={SubmitRegister}
            >
              Sign Up
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};
