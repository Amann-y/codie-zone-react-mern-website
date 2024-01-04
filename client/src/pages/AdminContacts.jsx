import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../store/auth";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./admincontacts.module.css";
import {toast} from "react-toastify"

const AdminContacts = () => {
  const { authorizationToken } = useGlobalContext();
  const [data, setData] = useState([]);
  const getContactData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/contacts", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (res.status == 200) {
        setData(res.data);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  const deleteHandle = async(id)=>{
    try {
      const res = await axios.delete(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
        headers:{
          Authorization: authorizationToken
        }
      })
      if(res.status==200){
        getContactData()
        toast.success("Deleted Successfully")
      }else{
        toast.error("Error While Deleting The contact")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.outer}>
      {data?.map((ele) => {
        return (
          <motion.div
            key={ele._id}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.header}>
              <div>
                <div className={styles.username}>{ele.username}</div>
                <div className={styles.email}>{ele.email}</div>
              </div>
              {/* <div className={styles.time}>{time}</div> */}
            </div>
            <div className={styles.message}>{ele.message}</div>
            <motion.button
            onClick={()=>deleteHandle(ele._id)}
              className={styles.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Delete
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AdminContacts;
