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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: null,
    children: [
      { index: true, element: <Home /> },
      { path: "/category/:id", element: <Category /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
