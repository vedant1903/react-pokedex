import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Pokedex
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
