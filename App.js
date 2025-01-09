import React, { useEffect, useState, lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Main from "./src/components/Main";
import RecipeeCard from "./src/components/RecipeeCard";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
import Login from "./src/components/Login";
import { mealURI } from "./config.js";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router";
import About from "./src/roots/About";
import Cart from "./src/roots/Cart";
import Services from "./src/roots/Services";
import Error from "./src/roots/Error";
import { useOnline } from "./src/utilities/useOnline";
import UserContext from "./src/utilities/UserContext";
const Instamart = lazy(() => import("./src/components/Instamart"));

import { Provider } from "react-redux";
import store from "./src/utilities/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name:"Rohit Singh",
    pofile:"",
    username: "rohitsingh@gmail.com",
    password: "1234",
    address:"Surendra Palace, Hosangabad Road Bhopal, 470667",
    age:"32"
  });
  let online = useOnline();

  if (!online) {
    return <h2>🔴 No internet : Please Check Your Connection </h2>;
  }

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Main user={{ name: "this is from prop drilling", age: "44" }} />
        ),
        children: [],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/about-restaurent/:id",
        element: <RecipeeCard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
