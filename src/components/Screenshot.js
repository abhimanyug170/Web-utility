import React, { Component } from "react";
import { connect } from "react-redux";

import { getScreenshot } from "../actions";
import webUtilityApi from "../apis/web-utility-api";

import "./ShortUrl.css";

class Screenshot extends Component {
  state = { url: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getScreenshot({ url: this.state.url });
  };

  handleDownloadClick = () => {
    webUtilityApi
      .get("/get-screenshot", {
        responseType: "arraybuffer"
      })
      .then(response => {
        const filename = "image.png";
        const blob = new Blob([response.data]);
        const blobUrl = (window.URL || window.webkitURL).createObjectURL(blob);
        const anchor = document.createElement("a", {
          style: { display: "none" }
        });
        document.body.appendChild(anchor);
        anchor.setAttribute("href", blobUrl);
        anchor.setAttribute("download", filename);
        anchor.click();
        anchor.remove();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { screenshot } = this.props;
    return (
      <div className="body-div">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 mt-5">
              <form
                onSubmit={this.onFormSubmit}
                className="border border-success rounded p-5 form-div mt-5"
              >
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter URL"
                    onChange={e => this.setState({ url: e.target.value })}
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
                      src={
                        !screenshot
                          ? "assets/ImagePlaceholder.png"
                          : `data:image/png;base64,${screenshot}`
                      }
                      alt=""
                      className="image-width"
                    />
                  </span>
                  <span className="span2">
                    <button
                      onClick={this.handleDownloadClick}
                      type="button"
                      className="btn btn-primary"
                    >
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

const mapStateToProps = state => ({
  screenshot: state.screenshot
});

export default connect(mapStateToProps, { getScreenshot })(Screenshot);
