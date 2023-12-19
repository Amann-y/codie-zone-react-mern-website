import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/error.module.css";

const Error = () => {
  return (
    <section>
      <div className={styles.content}>
        <h2 className={styles.h2}>404</h2>
        <h4 className={styles.h4}>Sorry! Page Not Found</h4>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          ipsum. Suscipit ipsam facilis, adipisci delectus aspernatur vitae
          esse.
        </p>
        <div className={styles.btns}>
          <NavLink to="/" className={styles.custom_navLink}>
            Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
