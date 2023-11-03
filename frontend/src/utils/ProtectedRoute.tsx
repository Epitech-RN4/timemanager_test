import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserStateInterface } from "../reducers/UserReducer";
import { UserContext } from "../context/userContext";

const ProtectedRoute = () => {
  const { userState } = useContext(UserContext) as {
    userState: UserStateInterface;
  };

  if (!userState.isLogged) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
