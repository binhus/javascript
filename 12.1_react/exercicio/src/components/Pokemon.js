import React from "react";

class Pokemon extends React.Component {
  
  render() {
    const {
      id,
      name,
      type,
      averageWeight,
      image,
      moreInfo,
    } = this.props.Pokeprops;
    console.log(this.props.Pokeprops);
    return (
      <div className="pokemon-content">
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
