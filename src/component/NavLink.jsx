/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames"; 

const MyNavLink = ({ isMobile, onClose }) => {
  const navigation = [
    { id: 1, title: "About", url: "/about" },
    { id: 2, title: "Skills", url: "/skills" },
    { id: 3, title: "Projects", url: "/projects" },
    { id: 4, title: "Contact", url: "/contact" },
  ];

  return (
    <div className={`${isMobile ? "mobile-nav" : "desktop-nav"}`}>
      {navigation.map((item) => (
        <NavLink
          key={item.id}
          to={item.url}
          className="nav-link"
          onClick={isMobile ? onClose : null} // Close mobile menu on click
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default MyNavLink;
