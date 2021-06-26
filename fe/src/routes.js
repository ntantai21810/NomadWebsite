import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";

const routes = [
  {
    path: "/login",
    exact: false,
    component: () => <LoginPage />,
  },
  {
    path: "/",
    exact: true,
    component: () => <MainPage />,
  },
];

export default routes;
