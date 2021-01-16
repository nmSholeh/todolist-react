import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import TodoList from "./Pages/TodoList";
import About from "./Pages/About";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
