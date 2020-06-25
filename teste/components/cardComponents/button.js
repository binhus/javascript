import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, test } = this.props;
    return (
      <button data-testid={test} type="button">
        {text}
      </button>
    );
  }
}

export default Button;
