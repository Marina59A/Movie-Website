import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/context_auth";

export default function Protected({ children }) {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? children : <Navigate to="/login" />;
}