import React, { Component } from "react";

import "./ShortUrl.css";

class Screenshot extends Component {
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
                <button
                  type="submit"
                  className="btn btn-primary sub-button mb-5"
                >
                  Button
                </button>
                <div className="insidediv1 mt-5">
                  <span>
                    <img
                      src="assets/ImagePlaceholder.png"
                      alt=""
                      className="image-width"
                    />
                  </span>
                  <span className="span2">
                    <button type="button" className="btn btn-primary">
                      Download
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screenshot;
