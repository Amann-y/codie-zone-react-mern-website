// Footer.js

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const colorVariants = {
    start: {
      color: "#f19a9a", // Initial color
    },
    end: {
      color: "#e6eee6", // Final color
      transition: {
        repeat: Infinity, // Repeat the animation infinitely
        duration: 5, // Animation duration in seconds
        repeatType: "reverse", // Reverse the animation on each repeat
      },
    },
  };
  return (
    <motion.footer
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className={styles.footer}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={styles.footerContent}
      >
        <motion.p
          initial="start"
          animate="end"
          variants={colorVariants}
          className={styles.para}
        >
          Made By Amann
        </motion.p>
        <div className={styles.socialIcons}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="#facebook"
          >
            &copy; 2024 All Rights Are Reserved
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
