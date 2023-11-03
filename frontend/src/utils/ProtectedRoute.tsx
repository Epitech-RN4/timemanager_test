import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
 // Assurez-vous que le chemin est correct


export interface UserStateInterface {
  isLogged: boolean;
  username: string;
  email: string;
}

const ProtectedRoute = () => {
  const { userState } = useContext(UserContext) as unknown as {
    userState: UserStateInterface;
  };

  if (!userState.isLogged) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
