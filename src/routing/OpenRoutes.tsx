// import { Navigate } from "react-router-dom";

// export const OpenRoutes = ({ children }) =>{
//   const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user")).token
//   : null;
//  return getTokenFromLocalStorage ===null ? children : (<Navigate to="/admin" replace={true}/>);
// }
import React from "react";
import { Navigate } from "react-router-dom";

const checkToken = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).access : null;
};

interface OpenRoutesProps {
  children: React.ReactNode;
}

export const OpenRoutes = ({ children }: OpenRoutesProps) => {
  return !checkToken() ? children : <Navigate to="/admin" replace />;
};