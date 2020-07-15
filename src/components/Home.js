import React, { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button as={Link} to="/short-url" variant="secondary">
            Tiny URL
          </Button>
          <Button as={Link} to="/screenshot" variant="secondary">
            Screenshot
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Home;
