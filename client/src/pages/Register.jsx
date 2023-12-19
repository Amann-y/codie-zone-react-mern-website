import React, { useState } from "react";
import registerPic from "../assets/images/registerPic.jpg";
import { useNavigate } from "react-router-dom";
import styles from "../styles/register.module.css";
import { useGlobalContext } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLocalStorage } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        //store token in localstorage
        storeTokenInLocalStorage(res_data.token);

        setUser({ username: "", phone: "", email: "", password: "" });
        toast.success("Registration Successful");
        navigate("/");
      } else {
        toast.error(res_data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
            <div className={styles.contact_image_div}>
              <img
                src={registerPic}
                alt="Pic"
                className={styles.contact_image}
              />
            </div>
            <div className={styles.contact_form_div}>
              <h1 className={styles.contact_h1}>Registration Form</h1>

              <form
                onSubmit={handleSubmit}
                className={styles.contact_right_div}
              >
                <div className={styles.contact_semi_div}>
                  <label htmlFor="username" className={styles.contact_title}>
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    className={styles.contact_input}
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>

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
                    className={styles.contact_input}
                    autoComplete="off"
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
                    className={styles.contact_input}
                    autoComplete="off"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>
                <div className={styles.contact_semi_div}>
                  <label htmlFor="phone" className={styles.contact_title}>
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    id="phone"
                    required
                    autoComplete="off"
                    className={styles.contact_input}
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
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
                  Register Now
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
