import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Tiny URL</Button>
          <Button variant="secondary">Screenshot</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Home;
