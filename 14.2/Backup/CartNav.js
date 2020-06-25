import React from 'react';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Button from './cardComponents/Button';

export default class CartNav extends React.Component {
  render() {
    const { productsCart, onClick } = this.props;
    return (
      <div className="nav-bar">
        <Button type="button" onClick={onClick}>
          Seu carrinho
        </Button>
        <div className="false">
          <h1>Seu carrinho </h1>
          <ShoppingCart productsCart={productsCart} />
        </div>
      </div>
    );
  }
}
