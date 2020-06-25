import React from 'react';

class Title extends React.Component {
  render() {
    const { name } = this.props;
    return <h3>{name}</h3>;
  }
}

export default Title;
