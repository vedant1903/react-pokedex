import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <h3>Vedant Deokar</h3>
      </div>
    );
  }
}
