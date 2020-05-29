import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import IndexPage from "./pages/index/index.pages";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <IndexPage />
    </ThemeProvider>
  );
}

export default App;
