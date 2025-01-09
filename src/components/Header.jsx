import React from "react";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.jpg";
import UserContext from "../utilities/UserContext";
// import store from "../utilities/store";
import { useSelector} from "react-redux";

function Header() {
  const [login, setLogin] = useState(false);
  const cartItems = useSelector(store=>store.cart.items)
  // const cartItems = [];
  return (
    <div className="flex justify-between items-center pl-3 pr-3 border-gray-800 border">
      <div className="">
        <NavLink to="/">
          <img src={Logo} alt="" className="h-24" />
        </NavLink>
      </div>
      {/* here we put search bar after learning useContext hook*/}
      <div className="">
        <ul className="flex gap-8 text-lg">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="about">
            <li>About</li>
          </NavLink>
          <NavLink to="services">
            <li>Services</li>
          </NavLink>
          <NavLink to="instamart">
            <li>Instamart</li>
          </NavLink>
          <NavLink to="cart">
            <li className="flex">
              Cart{" "}
              <div className="bg-red-600 text-zinc-100 h-5 w-5 ml-1 rounded-full flex justify-center items-center">
                {cartItems.length}
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
      <button
        className="border border-blue-200 p-2 pr-4 pl-4 rounded-md "
        onClick={() => {
          setLogin(true);
        }}
      >
        {login ? <NavLink to="/login">Login</NavLink> :<NavLink to="login">login</NavLink>}
      </button>
    </div>
  );
}

export default Header;
