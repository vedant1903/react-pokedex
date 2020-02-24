import React, { Component } from "react";
import axios from "axios";
import Axios from "axios";

export default class Pokemon extends Component {
  state = {
    id: "",
    name: "",
    hp: "",
    attack: "",
    defense: "",
    sp_attack: "",
    sp_defense: "",
    imageUrl: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await Axios.get(pokemonUrl);

    this.setState({
      id,
      name: res.data.name,
      imageUrl
    });
  }

  render() {
    return (
      <div className="container-md">
        <div className="col-6">
          <img src={this.state.imageUrl}></img>
          <h3>{this.state.name}</h3>
        </div>
        <div className="col-6"></div>
      </div>
    );
  }
}
