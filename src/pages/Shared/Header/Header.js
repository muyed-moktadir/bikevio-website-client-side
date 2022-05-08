import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/inventory">Manage Inventories</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        {
          user?.uid ? (
            <button className="btn-signOut" onClick={() => signOut(auth)}>sign Out</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )    
        }
      </nav>
    </div>
  );
};

export default Header;
