import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
    
  let errorElement;
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error?.message}
      </p>
    );
  }
  if (user) {
    // console.dir(user.email);

    navigate('/home');
  }
  return (
    <div>
      {errorElement}
      <button className="reset-btn" onClick={() => signInWithGoogle()}>
        Google SignIn
      </button>
    </div>
  );
};

export default SocialLogin;
