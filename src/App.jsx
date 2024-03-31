import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import NoItemInCart from "./components/NoItemInCart/NoItemInCart";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./Pages/Home/Home"));
const Products = lazy(() => import("./Pages/Products/Products"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail/ProductDetail"));
const About = lazy(() => import("./Pages/About/About"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",

          element: (
            <>
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
              ,
            </>
          ),
        },
        {
          path: "/products",
          element: (
            <>
              <Suspense fallback={<Loader />}>
                <Products />,
              </Suspense>
            </>
          ),
        },
        {
          path: "/products/:productId",
          element: (
            <>
              <Suspense fallback={<Loader />}>
                <ProductDetail />,
              </Suspense>
            </>
          ),
        },

        {
          path: "/about",

          element: (
            <>
              <Suspense fallback={<Loader />}>
                <About />,
              </Suspense>
            </>
          ),
        },
        {
          path: "/cart",
          element: (
            <>
              <Suspense fallback={<Loader />}>
                <Cart />,
              </Suspense>
            </>
          ),
        },
      ],
      errorElement: (
        <>
          <Navbar />
          <NoItemInCart heading={"Uh oh you are at the wrong location. "} />
        </>
      ),
    },
  ]);

  return (
    <div className="font">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
