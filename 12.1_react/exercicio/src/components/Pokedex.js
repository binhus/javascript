import React from "react";
import Pokemon from "./Pokemon";
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleState = () => {
    if (this.state.counter === 8) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };
  render() {
    return (
      <div>
        <Pokemon Pokeprops={this.props.data[this.state.counter]} />
        <button onClick={this.handleState}>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;
