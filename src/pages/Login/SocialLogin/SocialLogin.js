import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [user]= useAuthState(auth)


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
    navigate(from, { replace: true });
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
