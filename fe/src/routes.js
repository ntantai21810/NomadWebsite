import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

const routes = [
  {
    path: "/login",
    exact: false,
    component: () => <LoginPage />,
  },
];

export default routes;
