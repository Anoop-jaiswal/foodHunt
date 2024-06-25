import { createContext } from "react";

const UserContext = createContext({
  loginInfo: "loggedIn",
});

export default UserContext;
