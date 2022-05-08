import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    if (password !== confirmPassword) {
      setError("passwords did not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Registration</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              Enter Your Name
            </label>
            <input
              style={{ fontSize: "18px" }}
              onBlur={handleNameBlur}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="email">
              Enter Your Email Address
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
            <label style={{ fontSize: "19px" }} htmlFor="password">
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
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="confirm-password">
              Confirm Your Password
            </label>
            <input
              style={{ fontSize: "18px" }}
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-your-password"
            />
          </div>
          <p style={{ fontSize: "15px", color: "blue" }}>{error}</p>
          <input
            className="form-submit"
            type="submit"
            value="Sign Up"
            required
          />
        </form>
        <p style={{ fontSize: "17px" }}>
          Already Have An Account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
