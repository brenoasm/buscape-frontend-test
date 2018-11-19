import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem";

const propTypes = {
  products: PropTypes.array,
  onSelectedImageChange: PropTypes.func,
  onBrokenImageUrl: PropTypes.func.isRequired,
  handleProductAddToCartClick: PropTypes.func
};

const defaultProps = {
  products: null,
  onSelectedImageChange: () => {},
  onBrokenImageUrl: () => {},
  handleProductAddToCartClick: () => {}
};

const ProductList = ({
  products,
  onSelectedImageChange,
  onBrokenImageUrl,
  handleProductAddToCartClick
}) => (
  <div>
    {products &&
      products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onBrokenImageUrl={onBrokenImageUrl}
          onSelectedImageChange={onSelectedImageChange}
          handleProductAddToCartClick={handleProductAddToCartClick}
        />
      ))}
  </div>
);

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;
