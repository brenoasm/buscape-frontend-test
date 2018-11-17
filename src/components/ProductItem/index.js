import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import ProductPreviewImageList from "../ProductPreviewImageList";
import ProductInformation from "../ProductInformation";

const propTypes = {};

const defaultProps = {};

const StyledProductItem = styled.div`
  background-color: ${colors.white};
  margin: 15px 5px;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 3px 3px ${colors.graySecondary};
  height: 230px;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 2;
  }

  > div:last-child {
    margin-left: 20px;
  }
`;

const ProductItem = ({ product, onBrokenImageUrl, onSelectedImageChange }) => {
  return (
    <StyledProductItem>
      <ProductPreviewImageList
        selectedImage={product.selectedImage}
        images={product.images}
        productId={product.id}
        onBrokenImageUrl={onBrokenImageUrl}
        onSelectedImageChange={onSelectedImageChange}
      />
      <ProductInformation
        id={product.id}
        name={product.name}
        price={product.price}
      />
    </StyledProductItem>
  );
};

ProductItem.propTypes = propTypes;
ProductItem.defaultProps = defaultProps;

export default ProductItem;
