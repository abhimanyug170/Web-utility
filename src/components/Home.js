import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="body-div">
        <div className="top-div">Pocket Monster: Sun and Moon</div>
        <div className="button-div">
          <div className="internal-div">
            <div className="mb-5">
              <Button
                as={Link}
                to="/short-url"
                variant="primary"
                className="button-big pt-3"
              >
                Short URL
              </Button>
            </div>
            <div className="mt-5 text-div">
              Bubble is a damaging Water-type move introduced in Generation I.
            </div>
          </div>
          <div className="internal-div">
            <div className="mb-5">
              <Button
                as={Link}
                to="/screenshot"
                variant="primary"
                className="button-big pt-3"
              >
                Screenshot
              </Button>
            </div>
            <div className="mt-5 text-div">
              Withdraw is a non-damaging Water-type move introduced in
              Generation I.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
