import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// global styles
import GlobalStyle from "./globalStyles";
// componentes
import ScrollToTop from "./components/ScrollToTop";
// routes
import Routes from './routes';
// context provider
import ContextProvider from './contexts/global';

const App = () => {
  return (
    <ContextProvider>
      <Router >
        <GlobalStyle />
        <ScrollToTop />
        <Routes />
      </Router>
    </ContextProvider>
  );
}

export default App;
