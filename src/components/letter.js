import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Letter extends Component {
  render() {
    return (
      <Col className="col">
        <h3>{this.props.letter}</h3>
      </Col>
    )
  }
}

export default Letter;
