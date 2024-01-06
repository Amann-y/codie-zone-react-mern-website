import React from "react";
import Card from "../components/Card";
import { useGlobalContext } from "../store/auth";
import styles from "../styles/card.module.css";

const Service = () => {
  const { service } = useGlobalContext();

  return (
    <div className={styles.card_container}>
      {service &&
        service.map((ele) => {
          return <Card key={ele._id} data={ele} />;
        })}
    </div>
  );
};

export default Service;
