import React, { useState } from "react";
import loginPic from "../assets/images/450.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { useGlobalContext } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLocalStorage } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );

      if (response.statusText == "OK") {
        //store token in localstorage
        storeTokenInLocalStorage(response.data.token);
        toast.success("Login Successful");
        navigate("/");
        setUser({ email: "", password: "" });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const buttonVariants = {
    rest: {
      y: 0,
      backgroundColor: "#4CAF50", // Initial color
    },
    hover: {
      y: -10, // Move up on hover
      backgroundColor: "#45a049", // Color change on hover
    },
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className={styles.container}>
            <div className={styles.login_img_div}>
              <img src={loginPic} alt="Pic" className={styles.contact_image} />
            </div>
            <div className={styles.contact_form_div}>
              <h1 className={styles.contact_h1}>Login Form</h1>

              <form
                onSubmit={handleSubmit}
                className={styles.contact_right_div}
              >
                <div className={styles.contact_semi_div}>
                  <label htmlFor="email" className={styles.contact_title}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    className={styles.contact_input}
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <div className={styles.contact_semi_div}>
                  <label htmlFor="password" className={styles.contact_title}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    className={styles.contact_input}
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                <br />
                <motion.button
                  className={styles.contact_btn}
                  type="submit"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="rest" // Reset on click
                  style={{
                    padding: "10px 22px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    outline: "none",
                  }}
                >
                  Login
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
