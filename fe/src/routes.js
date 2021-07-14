import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const routes = [
  {
    path: "/login",
    exact: false,
    component: () => <LoginPage />,
  },
  {
    path: "/register",
    exact: false,
    component: ({ match }) => <LoginPage match={match} />,
  },
  {
    path: "/about",
    exact: false,
    component: () => <AboutPage />,
  },
  {
    path: "/",
    exact: true,
    component: () => <MainPage />,
  },
];

export default routes;
