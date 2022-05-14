import axios from "axios";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";
import aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  aos.init(
    {duration: 500,}
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    setEmail(email);
    console.log(name);
    const password = event.target.password.value;
    setPassword(password);
    console.log(password);
    const confirmPassword = event.target.confirmPassword.value;
    console.log(confirmPassword);
    if (password.length < 4) {
      setError(toast("password must be 4 "));
      console.log(name);
      return;
    }

    if (password !== confirmPassword) {
      setError("passwords did not match");
      return;
    }

    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    // navigate("/logon");
    const { data } = await axios.post("http://localhost:5000/login", { email });
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  return (
    <div data-aos="zoom-in" className="form-container">
      <div>
        <h2 className="form-title">Registration</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label style={{ fontSize: "19px" }} htmlFor="name">
              Enter Your Name
            </label>
            <input
              style={{ fontSize: "18px" }}
              // onBlur={handleNameBlur}
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
              // onBlur={handleEmailBlur}
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
              // onBlur={handlePasswordBlur}
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
              // onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirmPassword"
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
