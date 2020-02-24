import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../src/Components/Layout/NavBar'
import PokemonList from './Components/Pokemon/PokemonList';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>  
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;
