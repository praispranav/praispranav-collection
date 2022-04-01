import { BrowserRouter } from "react-router-dom";
import Navigator from "./navigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "styled-components";

const theme = {
  fg: "palevioletred",
  bg: "white",
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
