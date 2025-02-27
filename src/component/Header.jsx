/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MyNavLink from "./NavLink";
import "../css/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: {
      opacity: 0,
      y: -20,
      display: "none",
      transition: { display: { delay: 0.3 } },
    },
  };

  return (
    <nav className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        <div className="header-content">
          <a href="" className="logo">
            SS
          </a>
          <div className="nav-links">
            <MyNavLink isMobile={false} />
          </div>
          <div className="menu-button-container">
            <button onClick={toggleMenu} className="menu-button">
              {menuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="menu-icon" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="menu-icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${menuOpen ? "open" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mobile-menu-links">
            <MyNavLink isMobile={true} onClose={toggleMenu} />{" "}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
