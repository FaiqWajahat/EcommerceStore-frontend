import { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles,children }) => {
  const token = localStorage.getItem("userToken");

  if (!token) return <Navigate to="/login" replace />;

  try {
    const { name } = JSON.parse(atob(token.split(".")[1]));
    if (allowedRoles.includes(name)) {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
