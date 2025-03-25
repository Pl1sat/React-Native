import React from 'react';
import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import CryptoContext from "./CryptoContext";
import FavoritesList from "./components/FavoritesList"; // Ensure this component is used

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <CryptoContext>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
          <Route path="/favorites" component={FavoritesList} exact />
        </div>
      </BrowserRouter>
    </CryptoContext>
  );
}

export default App;