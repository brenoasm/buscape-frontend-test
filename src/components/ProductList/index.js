import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem";

const propTypes = {};

const defaultProps = {
  products: null
};

const StyledProductList = styled.div``;

const ProductList = ({
  products,
  onSelectedImageChange,
  onBrokenImageUrl,
  handleProductAddToCartClick
}) => {
  return (
    <StyledProductList>
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
    </StyledProductList>
  );
};

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;
