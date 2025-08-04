import { useAppDispatch, useAppSelector } from "@/app/hook";
import { logoutAction, selectAuth } from "../auth.slice";
import { loginUser } from "../auth.thunks";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(selectAuth);

  const logInUser = async (payload) => {
    const result = await dispatch(loginUser(payload));
    return result;
  };

  const logOutUser = () => {
    dispatch(logoutAction());
  };

  return {
    user,
    isAuthenticated,
    logOutUser,
    logInUser,
  };
}
