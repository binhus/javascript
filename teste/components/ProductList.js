import React from 'react';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

class ProductList extends React.Component {
  render() {
    const { productsData } = this.props;
    if (!productsData || productsData.length === 0) return <NotFound />;
    return (
      <div>
        {productsData.map((eachProductData) => (
          <ProductCard key={eachProductData.id} productData={eachProductData} />
        ))}
      </div>
    );
  }
}

export default ProductList;
