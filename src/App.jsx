import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Main from "./components/Main/Main";
import Reference from "./components/Reference/Reference";

//Add routes for your new pages here
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Main } />
          <Route exact path = "/reference" component = { Reference } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
