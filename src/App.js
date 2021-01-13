import React from "react";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import TodoList from "./Pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
