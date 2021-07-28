import React from "react";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path={["/", "/about", "/type/:type", "/restaurant/:id"]}
          component={Navbar}
        />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
        <Route
          exact
          path={["/", "/about", "/type/:type", "/restaurant/:id"]}
          component={Footer}
        />
      </Router>
    );
  }
}

export default App;
