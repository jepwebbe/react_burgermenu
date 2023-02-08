import { ThemeProvider } from "styled-components";
import Router from "./Components/App/Router/Router";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { GlobalStyles } from "./Styles/Global";

import { Theme } from "./Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
        <Router />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
