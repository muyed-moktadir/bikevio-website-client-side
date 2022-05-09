import React, {useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    
  };

  const resetEmail = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(email);
    toast("Mail sent");
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Please Login</h2>
        <form onSubmit={handleUserLogIn}>
          <div className="input-group">
            <label style={{ fontSize: "20px" }} htmlFor="email">
              Enter Your Email-Address
            </label>
            <input
              style={{ fontSize: "18px" }}
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "20px" }} htmlFor="password">
              Enter Your Password
            </label>
            <input
              style={{ fontSize: "18px" }}
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          {errorElement}
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p style={{ fontSize: "17px" }}>
          New to Here?{" "}
          <Link className="form-link" to={'/register'}>
            Create an account
          </Link>
          <p>
            forgot password?{" "}
            <button className="reset-btn" onClick={resetEmail}>
              reset password
            </button>
            <ToastContainer></ToastContainer>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
