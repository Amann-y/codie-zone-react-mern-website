import React from "react";
import styles from "../styles/home.module.css";
import homePic from "../assets/images/registerPic.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className={styles.section}>
      <main className={styles.container}>
        <div className={styles.grid_child1}>
          <p className={styles.heading_para}>We Are World Best IT Industry </p>
          <h1 className={styles.heading_h1}>Welcome To Codie Zone</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
            eius labore maxime consequuntur tenetur pariatur voluptatem, illo
            fugiat sint esse placeat asperiores praesentium et nostrum?
            Obcaecati cupiditate aliquam a vitae unde asperiores nostrum natus.
          </p>
          <div className={styles.btn_group}>
            <motion.button
              whileHover={{
                color: "#cdd3bc",
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={styles.btn_left}
            >
              Contact Now
            </motion.button>
            <motion.button
              whileHover={{ color: "#f8a406" }}
              className={styles.btn_right}
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className={styles.grid_child2}>
          <motion.img
            initial={{ x: 0 }}
            whileHover={{ x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            src={homePic}
            alt=""
            className={styles.image}
          />
        </div>
      </main>

      <main className={styles.main_second_group}>
        <div className={styles.main_second_sub_div}>
          <h1 className={styles.num_h1}>50 +</h1>
          <p className={styles.num_p}>Registered Companies</p>
        </div>
        <div className={styles.main_second_sub_div}>
          <h1 className={styles.num_h1}>10,000 +</h1>
          <p className={styles.num_p}>Happy Clients</p>
        </div>
        <div className={styles.main_second_sub_div}>
          <h1 className={styles.num_h1}>500 +</h1>
          <p className={styles.num_p}>Well Known Developers</p>
        </div>
        <div className={styles.main_second_sub_div}>
          <h1 className={styles.num_h1}>24*7</h1>
          <p className={styles.num_p}>Service</p>
        </div>
      </main>
    </section>
  );
};

export default Home;
