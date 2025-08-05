import { useDispatch, useSelector } from "react-redux";
import { logoutAction, selectAuth } from "./auth.slice";
import { loginUserAction } from "./auth.action";

export default function useAuth() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector(selectAuth);

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
