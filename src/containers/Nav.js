import React from "react";

const navItems = [
  { title: "Home", url: "https://www.youtube.com/" },
  { title: "About", url: "" },
  { title: "Products", url: "" },
];

const Nav = () => {
  const generateNavList = () =>
    navItems.map((item, index) => (
      <div key={item.title}>
        <a href={item.url}> {item.title} </a>
      </div>
    ));

  return <div className="navigationElement">{generateNavList()}</div>;
};

export default Nav;
