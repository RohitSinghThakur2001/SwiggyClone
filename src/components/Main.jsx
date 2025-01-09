import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { mealURI } from "../../config.js";
import { Link, useParams, NavLink, Outlet } from "react-router";

import Shimmer from "./Shimmer";
import MealCard from "./MealCard";
import Profile from "./Profile";
import Error from "../roots/Error";
import { filterData, useRecipee } from ".././utilities/helper";
import UserContext from ".././utilities/UserContext";
import { addItem, removeItem, clearCart } from ".././utilities/cartSlice";
import { useDispatch } from "react-redux";
import store from ".././utilities/store";

function Main() {
  const [data, setData] = useState([]);
  const [mealsArr, setMealsArr] = useState([]);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch(mealURI)
      .then((data) => data.json())
      .then((data) => {
        setData(data.data.data);
        setMealsArr(data.data.data);
      });
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center p-3 ">
        <div className="flex gap-2">
          <input
            className="p-1 w-96 border border-gray-200 focus:outline-green-300"
            type="text"
            placeholder="Search Food Name"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setMealsArr(filterData(searchText, data));
              } else if (e.keyCode === 8 && e.ctrlKey) {
                setMealsArr(data);
              }
            }}
          />
          <button
            className="p-2 border border-green-400 rounded-md "
            onClick={() => {
              setMealsArr(filterData(searchText, data));
            }}
          >
            Search
          </button>
        </div>
        {/* //.... */}
        {/* <div className="username">
          <input
            type="text"
            placeholder="username"
            className="border"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
          />
          <input
            type="text"
            placeholder="password"
            className="border"
            value={user.password}
            onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }}
          />
        </div> */}
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center ">
        {mealsArr.length == 0 ? (
          <Shimmer />
        ) : (
          mealsArr.map((elm) => (
            <>
              <NavLink to={`/about-restaurent/${elm.idMeal}`} key={elm.idMeal}>
                <MealCard {...elm} />
              </NavLink>
            </>
          ))
        )}
      </div>
    </>
  );
}

export default Main;
