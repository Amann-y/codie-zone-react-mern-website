import React, { useState } from "react";
import contactPic from "../assets/images/contact_img.jpg";
import styles from "../styles/contact.module.css";
import { useGlobalContext } from "../store/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { userData } = useGlobalContext();

  const [uData, setUdata] = useState(true);

  if (uData && userData) {
    setUser({
      username: userData.username,
      email: userData.email,
      message: "",
    });

    setUdata(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/form/contact",
        user
      );
      if (res.data.success == true) {
        setUser({
          username: "",
          email: "",
          message: "",
        });
        toast.success("Your Message Has Been Successfully Sent");
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
            <div className={styles.contact_image_div}>
              <img
                src={contactPic}
                alt="Pic"
                className={styles.contact_image}
              />
            </div>

            <div className={styles.contact_form_div}>
              <h1 className={styles.contact_h1}>Contact Form</h1>

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
                  <label htmlFor="message" className={styles.contact_title}>
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="message"
                    id="message"
                    required
                    className={styles.contact_input}
                    rows={8}
                    value={user.message}
                    onChange={(e) =>
                      setUser({ ...user, message: e.target.value })
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
                  Send
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className={styles.gMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9495847475!2d75.699033217425!3d22.72420499950336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1701596433213!5m2!1sen!2sin"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
