import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../store/auth";
import { motion } from "framer-motion";
import styles from "./adminusers.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const { authorizationToken } = useGlobalContext();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users", {
        headers: {
          Authorization: authorizationToken,
        },
      });
      const output = await res.data;
      setUsers(output);
      
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  const handleDelete = async (id) => {
 
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (res.status == 200) {
        getAllUsersData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <motion.table
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.table}
    >
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, index) => (
          <motion.tr
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <td data-label="Name">{item.username}</td>
            <td data-label="Email">{item.email}</td>
            <td data-label="Phone">{item.phone}</td>
            <td>
              <Link
                className={`${styles.button} ${styles.update}`}
                to={`/admin/users/${item._id}/edit`}
              >
                Update
              </Link>
            </td>
            <td>
              <button
                className={`${styles.button} ${styles.delete}`}
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default AdminUsers;
