import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestoMenu from "./Components/RestoMenu";
import DemoUseMemo from "./Components/DemoUseMemo";
import AboutClass from "./Components/AboutClass";
import Shimmer from "./Components/Shimmer";
import RestroCategory from "./Components/RestroCategory";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./Redux/reducStore";
import Cart from "./Components/Cart";
import { useGetZomatoDataQuery } from "./Redux/zomatoSlice";
import DemoRef from "./Components/DemoRef";

const About = lazy(() => import("./Components/About"));
// import Header from "./header";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  const val = "help";
  useEffect(() => {
    setUserName("Nikhil");
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ loggedInUser: userName, setUserName, val }}
      >
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Akul" }}> */}
            <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Container />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading...."}>
            <About />
          </Suspense>
        ),
        // element: <About />,
        children: [
          {
            path: "/about",
            element: <AboutClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restoDetail/:location/:resId/:order",
        element: <RestoMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
         path: "/demoMemo",
      element: <DemoUseMemo />,

      }
      ,
      {
         path: "/demoRef",
      element: <DemoRef />,

      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); this waas react element
root.render(<RouterProvider router={appRouter} />); // this is react fun() component;
