import React, { Component } from "react";
import { connect } from "react-redux";

import { getShortUrl } from "../actions";

import "./ShortUrl.css";

class ShortUrl extends Component {
  state = { url: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getShortUrl({ longUrl: this.state.url });
  };

  render() {
    const { shortUrl } = this.props;
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
                <button type="submit" className="btn btn-primary sub-button">
                  Submit
                </button>
                <div className="form-group mt-5">
                  <label for="inputAddress">Your URL</label>
                  {shortUrl && <div>{shortUrl}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shortUrl: state.shortUrl
  };
};

export default connect(mapStateToProps, { getShortUrl })(ShortUrl);
