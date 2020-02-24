import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../src/Components/Layout/NavBar";
import PokemonList from "./Components/Pokemon/PokemonList";
import Pokemon from "./Components/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:id" component={Pokemon} />      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
