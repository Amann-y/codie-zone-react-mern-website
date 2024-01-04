import React, { useState, useEffect } from "react";
import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        data,
        {
          headers: {
            Authorization: `${authorizationToken}`,
          },
        }
      );
    
      if (res.status == 200) {
        toast.success("Updated Successfully");
        setData({username:'', phone:'',email:''})
      } else {
        toast.error("Error Occurred While Updating ");
      }
    } catch (error) {
      console.log(error);
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

  const getSingleUserData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      setData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className={styles.container}>
            <div className={styles.contact_form_div}>
              <h1 className={styles.contact_h1}>Update User Form</h1>

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
                    value={data.username}
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
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
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>

                <div className={styles.contact_semi_div}>
                  <label htmlFor="message" className={styles.contact_title}>
                    Phone
                  </label>
                  <input
                    type="number"
                    name="message"
                    id="message"
                    required
                    className={styles.contact_input}
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
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
                  Update
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AdminUpdate;
