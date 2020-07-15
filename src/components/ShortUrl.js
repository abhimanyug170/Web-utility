import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class ShortUrl extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter URL" />
            <Form.Text className="text-muted">
              Enter Address of website to be shorten.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ShortUrl;
