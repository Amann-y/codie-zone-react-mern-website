import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useGlobalContext } from "../store/auth";
import Logo from "../assets/images/amann2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useGlobalContext();

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav_logo} to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <div className="hamburger_menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? styles.nav_red : styles.nav_black}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            `${isActive ? styles.nav_red : styles.nav_black}`
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? styles.nav_red : styles.nav_black}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${isActive ? styles.nav_red : styles.nav_black}`
          }
        >
          Contact
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `${isActive ? styles.nav_red : styles.nav_black}`
            }
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${isActive ? styles.nav_red : styles.nav_black}`
              }
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${isActive ? styles.nav_red : styles.nav_black}`
              }
            >
              Login
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
