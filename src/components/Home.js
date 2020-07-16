import React, { Component } from "react";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="body-div">
        <div className="top-div">Pocket Monster: Sun and Moon</div>
        <div className="button-div">
          <div className="internal-div">
            <div className="mb-5">
              <button type="button" class="btn btn-primary button-big">
                Short URL
              </button>
            </div>
            <div className="mt-5 text-div">
              Bubble is a damaging Water-type move introduced in Generation I.
            </div>
          </div>
          <div className="internal-div">
            <div className="mb-5">
              <button type="button" class="btn btn-primary button-big">
                Screenshot
              </button>
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
