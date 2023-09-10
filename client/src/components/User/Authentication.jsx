import React, { Fragment,useState,useEffect } from 'react'
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import './Authentication.css'
import { useRef } from 'react';
import Profile from '../../images/Profile.png';
import { clearErrors, login,register } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );
    

    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const loginTab = useRef(null);
    const registerTab = useRef(null);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

      const [avatar, setAvatar] = useState("/Profile.png");
      const [avatarPreview, setAvatarPreview] = useState( Profile );

      const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
  
      };
     const registerSubmit = (e) => {
       e.preventDefault();

       const myForm = new FormData();

       myForm.set("name", name);
       myForm.set("email", email);
       myForm.set("password", password);
       myForm.set("avatar", avatar);
       dispatch(register(myForm));
     };


      const registerDataChange = (e) => {
      if (
        e.target.name === "avatar" &&
        e.target.files &&
        e.target.files.length > 0
      ) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };

        reader.readAsDataURL(file);
      } else {
        setUser({ ...user, [e.target.name]: e.target.value });
      }
      };
  

      useEffect(() => {    
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (isAuthenticated) {
            navigate("/account");
        }
        if (error === "Invalid Credentials") {
            setLoginEmail("");
            setLoginPassword("");
        }
        
      }, [error, alert, isAuthenticated, navigate]);


    const handleSignUpClick = () => {
      setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
      setIsSignUpActive(false);
    };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="auth">
            <div
              className={`Authcontainer ${
                isSignUpActive ? "right-panel-active" : ""
              }`}
              id="container"
            >
              <div className="form-container sign-up-container">
                <form
                  ref={registerTab}
                  encType="multipart/form-data"
                  onSubmit={registerSubmit}
                >
                  <h1 className="h1">Create Account</h1>
                  <div className="social-container">
                    <a href="#" className="social a">
                      <FaGoogle />
                    </a>
                    <a href="#" className="social a">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="social a ">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <span className="span">
                    or use your email for registration
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                  <div id="registerImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={registerDataChange}
                    />
                  </div>
                  <button type="submit" value="Register">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form ref={loginTab} onSubmit={loginSubmit}>
                  <h1 className="h1">Sign in</h1>
                  <div className="social-container">
                    <a href="#" className="social a">
                      <FaGoogle />
                    </a>
                    <a href="#" className="social a">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="social a ">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <span className="span">or use your account</span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <a href="#" className="a forget">
                    Forgot your password?
                  </a>
                  <a href="#" className="a">
                    {error}
                  </a>
                  <button type="submit" value="Login">
                    Sign In
                  </button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1 className="h1">Welcome Back!</h1>
                    <p className="p">
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button
                      onClick={handleSignInClick}
                      className="ghost"
                      id="signIn"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1 className="h1">Hello, Friend!</h1>
                    <p className="p">
                      Enter your personal details and start journey with us
                    </p>
                    <button
                      onClick={handleSignUpClick}
                      className="ghost"
                      id="signUp"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Authentication;

