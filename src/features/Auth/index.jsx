import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import useAuth from "@/features/Auth/useAuth";
import PATH from "@/configs/paths/PATH";
import useActionLoader from "@/features/Outlet/useActionLoader";
import LoginForm from "./components/LoginForm";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const isLoading = useActionLoader("auth/loginUser");

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate(PATH.HOME, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='login-container'>
      <LoginForm loading={isLoading} />
    </div>
  );
}

export default Login;
