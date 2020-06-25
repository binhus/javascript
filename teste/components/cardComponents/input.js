import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, value, test } = this.props;
    return <input type={type} data-testid={test} value={value} />;
  }
}

export default Input;
