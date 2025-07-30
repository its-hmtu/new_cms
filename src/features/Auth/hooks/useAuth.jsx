import { useAppDispatch, useAppSelector } from "@/app/hook";
import { clearErrorAction, logoutAction, selectAuth } from "../auth.slice";
import { loginUser } from "../auth.thunks";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading, error } = useAppSelector(selectAuth);

  const logInUser = async (payload) => {
    const result = await dispatch(loginUser(payload));
    return result;
  };

  const logOutUser = () => {
    dispatch(logoutAction());
  };

  const clearAuthError = () => {
    dispatch(clearErrorAction());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    logOutUser,
    logInUser,
    clearAuthError
  };
}
