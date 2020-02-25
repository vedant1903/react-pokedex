import React, { Component } from "react";
import Axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      hp: "",
      speed: "",
      attack: "",
      defense: "",
      sp_attack: "",
      sp_defense: "",
      imageUrl: "",
      types: [],
      abilities: [],
      weight: "",
      height: "",
      nextBtnState: null,
      prevBtnState: null
    };

    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  async initialize() {
    const { id } = this.props.match.params;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const res = await Axios.get(pokemonUrl);
    const statMap = new Map();

    //Get all the stats of the Pokemon and store it in a Map named statMap
    res.data.stats.map(element => {
      statMap.set(element.stat.name, element.base_stat);
    });

    //Get the Pokemon type
    const types = [];
    res.data.types.map(element => {
      types.push(element.type.name);
    });

    //Get the abilities
    const abilities = [];
    res.data.abilities.map(element => {
      abilities.push(element.ability.name);
    });

    //Set the prev and next btn state (whether disabled or not)
    const prevBtnState = parseInt(id) - 1 < 1 ? true : false;
    const nextBtnState = parseInt(id) + 1 > 890 ? true : false;

    this.setState({
      id,
      name: res.data.name,
      types,
      hp: statMap.get("hp"),
      speed: statMap.get("speed"),
      attack: statMap.get("attack"),
      defense: statMap.get("defense"),
      sp_attack: statMap.get("special-attack"),
      sp_defense: statMap.get("special-defense"),
      imageUrl,
      abilities,
      height: res.data.height,
      weight: res.data.weight,
      nextBtnState,
      prevBtnState
    });
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (id !== prevProps.match.params.id) {      
      this.initialize();
    }
  }

  render() {
    const prevID = parseInt(this.state.id) - 1;
    const nextID = parseInt(this.state.id) + 1;

    return (
      <div className="container-md">
        <div className="inner-container">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4 col-sm-12">
                  <img src={this.state.imageUrl}></img>
                  <h4>#{this.state.id}</h4>
                  <h5 className="text-capitalize">{this.state.name}</h5>
                  <div className="type">
                    {this.state.types.map(type => (
                      <Badge className="badge" pill variant="primary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                  <div className="abilities">
                    {this.state.abilities.map(ability => (
                      <span className="abil-span text-capitalize">
                        {ability}
                      </span>
                    ))}
                  </div>
                  <div className="physical">
                    <span>Height: {this.state.height}</span>
                    <span>Weight: {this.state.weight}</span>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="statbar">
                    <span>HP</span>
                    <ProgressBar now={this.state.hp} label={this.state.hp} />
                  </div>
                  <div className="statbar">
                    <span>Speed</span>
                    <ProgressBar
                      now={this.state.speed}
                      label={this.state.speed}
                    />
                  </div>
                  <div className="statbar">
                    <span>Attack</span>
                    <ProgressBar
                      now={this.state.attack}
                      label={this.state.attack}
                    />
                  </div>
                  <div className="statbar">
                    <span>Defense</span>
                    <ProgressBar
                      now={this.state.defense}
                      label={this.state.defense}
                    />
                  </div>
                  <div className="statbar">
                    <span>Special Attack</span>
                    <ProgressBar
                      now={this.state.sp_attack}
                      label={this.state.sp_attack}
                    />
                  </div>
                  <div className="statbar">
                    <span>Special Defense</span>
                    <ProgressBar
                      now={this.state.sp_defense}
                      label={this.state.sp_defense}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomnav">
            <Link to={`/pokemon/${prevID}`}>
              <button disabled={this.state.prevBtnState}>Prev</button>
            </Link>
            <Link to={`/pokemon/${nextID}`}>
              <button disabled={this.state.nextBtnState}>Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
