import React from "react";
import "./App.css";

class Futebol extends React.Component {
  chute = () => {
    console.log(this);
  };
  submitFormHandler = (event) => {
    console.dir(this.refs.name.value);
  };

  render() {
    return (
      <div>
        <button onClick={this.chute}>Chute Aqui amigo</button>
        <input onChange={this.submitFormHandler} type="text" name="name" ref="name" />
      </div>
    );
  }
}

export default Futebol;
