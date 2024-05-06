import { Fragment } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

function IsAuthenticated({ children }) {
  const { isLoggedIn, token } = useAuthStore();
  if (!token && !isLoggedIn) {
    return <Navigate to={"/login"} replace />;
  }
  return <Fragment>{children}</Fragment>;
}

IsAuthenticated.propTypes = {
  children: PropTypes.any,
};

export default IsAuthenticated;
