import React from "react";
import { Outlet, NavLink, Navigate } from "react-router-dom";
import styles from "../../styles/adminlayout.module.css";
import { useGlobalContext } from "../../store/auth";

const AdminLayout = () => {
  const { isLoggedIn, userData , isLoading} = useGlobalContext();
 if(isLoading){
return <h1>Loading...</h1>
 }
  return (
    <>
      {userData?.isAdmin ? (
        <>
          {" "}
          <header>
            <div className={styles.main_container}>
              <div>
                <ul className={styles.ul}>
                  <li>
                    <NavLink
                      to="/admin/users"
                      className={({ isActive }) =>
                        isActive ? styles.text_orange : styles.text_black
                      }
                    >
                      Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/admin/contacts"
                      className={({ isActive }) =>
                        isActive ? styles.text_orange : styles.text_black
                      }
                    >
                      Contacts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service"
                      className={({ isActive }) =>
                        isActive ? styles.text_orange : styles.text_black
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? styles.text_orange : styles.text_black
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <Outlet />{" "}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminLayout;
