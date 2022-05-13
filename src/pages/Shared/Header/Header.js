import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/inventory"><p style={{marginLeft:"15px"}}>Manage Items</p></CustomLink>
        {user? (
          <nav>
            <CustomLink to="/additem">Add item</CustomLink>
            <CustomLink to="/myitems">Myitems</CustomLink>
            <button className="btn-signOut" onClick={() => signOut(auth)}>
              sign Out
            </button>
          </nav>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
        <CustomLink to="/blog">Blog</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
