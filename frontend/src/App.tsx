import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Dashboard } from "./pages/dashboards/Dashboard";
import ErrorComponent from "./utils/ErrorComponent";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="auth" element={<AuthLayout/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
            </Route>

            <Route path="/" element={<ProtectedRoute/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="general-info" element={<Dashboard/>}/>
                <Route path="dashboards"/>
                <Route path="manage"/>
            </Route>

            <Route path="*" element={<ErrorComponent/>}/>
        </Route>
      </Routes>
  )
}