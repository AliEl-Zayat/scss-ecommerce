import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Layout from "./pages/Layout";
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Home from "./pages/home/Home";
import store from "./store/store";
import { Provider } from "react-redux";
// Demo Call Start
import SingleCategory from "./components/single-category/SingleCategory";
import ImageLoading from "./components/image-loading/ImageLoading";
import SkeletonLoading from "./components/image-loading/SkeletonLoading";
// Demo Call End
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: null,
    children: [
      { index: true, element: <Home /> },
      { path: "/category/:id", element: <Category /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/demo",
        element: (
          // <ImageLoading src="https://images.pexels.com/photos/13297056/pexels-photo-13297056.jpeg?cs=srgb&dl=pexels-addy-bronzzz-13297056.jpg&fm=jpg&w=7952&h=5304" />
          <SkeletonLoading src="https://images.pexels.com/photos/9969502/pexels-photo-9969502.jpeg?cs=srgb&dl=pexels-amar-preciado-9969502.jpg&fm=jpg&w=8217&h=14615" />
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
