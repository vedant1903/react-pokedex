import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "12",
      name: "",
      imageUrl: ""
    };
  }

  componentDidMount() {
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.props.id}.png?raw=true`;
    console.log("imgae url is ", imageUrl);
    this.setState({
      name: this.props.name,
      imageUrl: imageUrl,
      id: this.props.id
    });
  }

  render() {
    return (
      <div className=" col-md-3 col-sm-6 m-0">
        <div className="card pokecard">
          <Link to={`/pokemon/${this.state.id}`}>
            <img
              className="card-img-top rounded mx-auto d-block mt-2"
              src={this.state.imageUrl}
              style={{ width: "5em", height: "5em" }}
            ></img>
            <h5 className="card-header">
              #{this.state.id}. {this.state.name}
            </h5>
          </Link>
        </div>
      </div>
    );
  }
}

{
  /* <div className="card col-md-3 col-sm-6 pokecard">
<Link to={`/pokemon/${this.state.id}`}>
  <img
    className="card-img-top rounded mx-auto d-block mt-2"
    src={this.state.imageUrl}
    style={{ width: "5em", height: "5em" }}
  ></img>
  <h5 className="card-header">
    #{this.state.id}. {this.state.name}
  </h5>
</Link>
</div> */
}
