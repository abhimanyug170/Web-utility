import React, { Component } from "react";

import "./ShortUrl.css";

class ShortUrl extends Component {
  render() {
    return (
      <div className="body-div">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 mt-5">
              <form className="border border-success rounded p-5 form-div mt-5">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter URL"
                  />
                </div>
                <button type="submit" className="btn btn-primary sub-button">
                  Submit
                </button>
                <div className="form-group mt-5">
                  <label for="inputAddress">Your URL</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortUrl;
