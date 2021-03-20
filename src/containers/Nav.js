import React from "react";
import {NavLink} from 'react-router-dom'

const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Products", url: "/products" },
];

const Nav = () => {
  const generateNavList = () =>
    navItems.map((item, index) => (
      <div key={item.title}>
        <NavLink to={item.url}> {item.title} </NavLink>
      </div>
    ));

  return <div className="navigationElement">{generateNavList()}</div>;
};

export default Nav;
