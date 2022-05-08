import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/inventory">Manage Items</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
