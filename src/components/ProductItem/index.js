import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import ProductPreviewImageList from "../ProductPreviewImageList";
import ProductInformation from "../ProductInformation";

const propTypes = {
  product: PropTypes.object.isRequired,
  onBrokenImageUrl: PropTypes.func.isRequired,
  onSelectedImageChange: PropTypes.func,
  handleProductAddToCartClick: PropTypes.func
};

const defaultProps = {
  product: null,
  onBrokenImageUrl: () => {},
  onSelectedImageChange: () => {},
  handleProductAddToCartClick: () => {}
};

const StyledProductItem = styled.div`
  background-color: ${colors.white};
  margin: 15px 5px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 3px ${colors.graySecondary};
  display: flex;
  justify-content: space-between;

  > div {
    flex: 2;
  }

  > div:last-child {
    margin-left: 20px;
  }
`;

const ProductItem = ({
  product,
  onBrokenImageUrl,
  onSelectedImageChange,
  handleProductAddToCartClick
}) => {
  return (
    <Fragment>
      {product && (
        <StyledProductItem>
          <ProductPreviewImageList
            selectedImage={product.selectedImage}
            images={product.images}
            productId={product.id}
            onBrokenImageUrl={onBrokenImageUrl}
            onSelectedImageChange={onSelectedImageChange}
          />
          <ProductInformation
            product={product}
            handleProductAddToCartClick={handleProductAddToCartClick}
          />
        </StyledProductItem>
      )}
    </Fragment>
  );
};

ProductItem.propTypes = propTypes;
ProductItem.defaultProps = defaultProps;

export default ProductItem;
