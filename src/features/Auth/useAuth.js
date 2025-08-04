import { useAppDispatch, useAppSelector } from "@/app/hook";
import { logoutAction, selectAuth } from "./auth.slice";
import { loginUserAction } from "./auth.action";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(selectAuth);

  const logInUser = (payload) => dispatch(loginUserAction(payload));

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
