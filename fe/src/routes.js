import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";

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
    path: "/type/:type",
    exact: false,
    component: () => <RestaurantsPage />,
  },
  {
    path: "/restaurant/:id",
    exact: false,
    component: ({ match }) => <RestaurantPage match={match} />,
  },
  {
    path: "/",
    exact: true,
    component: () => <MainPage />,
  },
];

export default routes;
