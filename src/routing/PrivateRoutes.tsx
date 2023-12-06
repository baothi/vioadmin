// import { Navigate } from "react-router-dom";

// export const PrivateRoutes = ({ children }) =>{
//   const getTokenFromLocalStorage = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user")).token
//   : null;
//  return getTokenFromLocalStorage !==null ? children : (<Navigate to="/" replace={true}/>);
// }
import React from "react";
import { Navigate } from "react-router-dom";

const checkToken = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).access : null;
};

interface PrivateRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  return checkToken() ? children : <Navigate to="/" replace />;
};