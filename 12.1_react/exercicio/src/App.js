import React from "react";
import "./App.css";
import pokemons from "./data";
import Title from "./components/Title";
import Pokedex from "./components/Pokedex";


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Title />
        <Pokedex data={pokemons} />
      </div>
    );
  }
}

export default App;
