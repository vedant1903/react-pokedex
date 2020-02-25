import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //call only the first 151 Pokemon - 1st gen Pokemon
      url: "https://pokeapi.co/api/v2/pokemon/?limit=40",
      pokemonList: null,
      cards: null
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res);
    this.setState({
      pokemonList: res.data["results"]
    });
    let id = 1
    const cards = this.state.pokemonList.map(pokemon => {
      return <PokemonCard name={pokemon.name} 
      url={pokemon.url}
      id={id++}/>;
    });

    this.setState({ cards });
  }

  render() {
    return (
      <div className="container-md">
        <div className="pokelist-container row">{this.state.cards}</div>
      </div>
      
    )
  }
}
