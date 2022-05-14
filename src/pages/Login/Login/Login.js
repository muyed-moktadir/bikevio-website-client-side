import React, { useRef } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    // console.log(user)
  }

  const handleUserLogIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    // console.dir(email);

    const password = passwordRef.current.value;
    // console.log(password);

// TODO: access token post
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
    navigate("/addItem");
  };


  const resetEmail = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Mail sent");
    } else {
      toast("please enter your email address");
    }
  };
  aos.init();
  return (
    <div  data-aos="zoom-in" className="form-container">
      <div>
        <h2 className="form-title">Please Login</h2>
        <form onSubmit={handleUserLogIn}>
          <div className="input-group">
            <label style={{ fontSize: "20px" }} htmlFor="email">
              Enter Your Email-Address
            </label>
            <input
              style={{ fontSize: "18px" }}
              // onBlur={handleEmailBlur}
              type="email"
              // name="email"
              ref={emailRef}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "20px" }} htmlFor="password">
              Enter Your Password
            </label>
            <input
              style={{ fontSize: "18px" }}
              // onBlur={handlePasswordBlur}
              type="password"
              // name="password"
              ref={passwordRef}
              required
            />
          </div>
          {errorElement}
          <div>{loading && <p>Loading...</p>}</div>

          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p style={{ fontSize: "17px" }}>
          New to Here?{" "}
          <Link className="form-link" to={"/register"}>
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
