import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../store/auth";

const Logout = () => {
  const { LogoutUser } = useGlobalContext();

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};

export default Logout;
