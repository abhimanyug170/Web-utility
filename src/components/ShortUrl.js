import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";

import { getShortUrl } from "../actions";

class ShortUrl extends Component {
  state = { url: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getShortUrl({ longUrl: this.state.url });
  };

  render() {
    const { shortUrl } = this.props;
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter URL"
              onChange={e => this.setState({ url: e.target.value })}
            />
            <Form.Text className="text-muted">
              Enter Address of website to be shorten.
            </Form.Text>
          </Form.Group>

          {shortUrl && <Alert variant="success">shortUrl</Alert>}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ShortUrl: state.ShortUrl
  };
};

export default connect(mapStateToProps, { getShortUrl })(ShortUrl);
