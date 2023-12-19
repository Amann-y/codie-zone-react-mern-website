import React from "react";
import { useGlobalContext } from "../store/auth";
import { NavLink } from "react-router-dom";
import aboutPic from "../assets/images/About.jpg";
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";

const About = () => {
  const { userData } = useGlobalContext();

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
    <main>
      <section>
        <div className={styles.section_hero}>
          <div className={styles.hero_content}>
            <h1 className={styles.greeting}>
              Namaste {userData ? `${userData.email}` : `Ji`}
            </h1>

            <h1>Why Choose Us? </h1>
            <p className={styles.para}>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className={styles.para}>
              Customization: We understand that every business is unique. Thats
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p className={styles.para}>
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className={styles.para}>
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p className={styles.para}>
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
            </p>
            <div className={styles.btn_group}>
              <NavLink to="/contact">
                <motion.button
                  className={styles.contact_btn}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="rest" // Reset on click
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    outline: "none",
                  }}
                >
                  Connect Now
                </motion.button>
              </NavLink>
            </div>
          </div>
          <div className={styles.hero_image_div}>
            <img src={aboutPic} alt="Img" className={styles.about_img} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
