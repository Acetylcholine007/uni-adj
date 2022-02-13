import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { UserContext } from "../contexts/UserContextProvider";

export const useUserContext = () => {
  const {
    auth: { userId }, authDispatch
  } = useContext(AuthContext);
  const {
    users: { users }, userDispatch
  } = useContext(UserContext);

  const user = userId != null ? users.find((user) => user.userId === userId) : null;
  const accountType = user != null ? user.accountType : 1;
  return {userId, user, accountType, authDispatch, userDispatch};
}