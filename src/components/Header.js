import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const online = useOnlineStatus();

  const { loginInfo } = useContext(UserContext);
  console.log(loginInfo);

  return (
    <div className="header flex justify-between shadow-lg bg-slate-50 items-center h-20">
      <div className="logo-container">
        <img className="logo w-20 bg-transparent" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex m-4 p-4">
          <li className="mx-2">Online Status : {online ? "🟢" : "🔴"}</li>
          <li className="mx-2">
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="mx-2">
            <Link to="/cart">CART</Link>
          </li>
          <button
            className="login-btn mx-2"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
