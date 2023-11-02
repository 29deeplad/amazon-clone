import React, { useState, useEffect } from 'react';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import AamzonLogo from "../../Amazon_Logo.png";
import {useSelector, useDispatch} from "react-redux";
import { registerInitiate } from '../../redux/action';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, SetPssword] = useState("");

    const { user } = useSelector((state) => state.data);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    let dispatch = useDispatch();

    const register =  (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        SetPssword("");
    };
  return (
    <div className="register">
      <Link to="/">
        <img src={AamzonLogo} className="register-logo" alt="logo"/>
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
            <h5>E-Mail</h5>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <h5>Password</h5>
            <input
                type="password"
                value={password}
                onChange={(e) => SetPssword(e.target.value)} 
            />
            <button type="submit" on onClick={register} className="continue">
                Continue
            </button>
            <div className="detail">
                <p>Already have an account ?</p>
                <Link to="/login" className="signin-link">
                    <p>Sign In</p>
                </Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
