import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: false,
      source: '',
    };
  }
  getApi = () => {
    this.setState({
      pageLoaded: false
    })
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((image) => {
        this.setState({
          pageLoaded: true,
          source: image.message,
        });
      });
  };

  componentDidMount = () => {
    this.getApi();
  };

  render() {
    const { pageLoaded, source } = this.state;
    if (!pageLoaded) {
      return (
        <div className="container">
          <h1>Life cycles</h1>
          <p>Loading...</p>
          <button onClick={() => this.getApi()}>Gerar Imagem</button>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Life cycles</h1>
        <img src={source} />
        <button onClick={() => this.getApi()}>Gerar Imagem</button>
      </div>
    );
  }
}
