import styles from "../styles/card.module.css";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.mycard}
      variants={cardVariants}
      whileHover="hover"
    >
      <img
        src="https://cdn.pixabay.com/photo/2016/06/25/13/00/purse-1478852_1280.jpg"
        className={styles.card_img}
      />
      <h2 className={styles.card_h2}>{data.service}</h2>
      <h5 className={styles.card_h5}>{data.provider}</h5>
      <p className={styles.card_p}>{data.description}</p>
    </motion.div>
  );
};

export default Card;
