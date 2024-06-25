import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Body from "./components/Body";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const userContext = useContext(UserContext);
  console.log(userContext.loginInfo);
  return (
    <div className="app">
      <UserContext.Provider value={{ loginInfo: "changed" }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
  );
};

//Implementing lazy loading for components
const RestaurantsMenu = lazy(() => import("./components/RestaurantsMenu"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          //Lazy loading component must be wrapped inside suspense
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <RestaurantsMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
