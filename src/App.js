import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import IndexPage from "./pages/index/index.pages";
import { GlobalDataProvider } from "./context/global-data/global-data.context";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});
function App() {
  return (
    <GlobalDataProvider>
      <ThemeProvider theme={theme}>
        <IndexPage />
      </ThemeProvider>
    </GlobalDataProvider>
  );
}

export default App;
