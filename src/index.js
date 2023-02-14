import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Layout from "./pages/Layout";
import Cart from "./components/cart/Cart";
import Home from "./pages/home/Home";
import store from "./store/store";
import { Provider } from "react-redux";
// Demo Call Start
import Categories from "./pages/category/CategoriesPage";
// Demo Call End
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: null,
    children: [
      { index: true, element: <Home /> },
      { path: "/category/:id", element: <Categories /> },
      { path: "/cart", element: <Cart /> },
      { path: "/demo/:id", element: <Categories /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
