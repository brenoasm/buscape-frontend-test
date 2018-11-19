import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import Loading from "../Loading";
import Tag from "../Tag";
import AddToCartButton from "../buttons/AddToCartButton";
import ProductSubtotal from "../ProductSubtotal";
import FavoriteButton from "../buttons/FavoriteButton";

const propTypes = {
  product: PropTypes.object.isRequired,
  handleProductAddToCartClick: PropTypes.func
};

const defaultProps = {
  product: null,
  handleProductAddToCartClick: () => {}
};

const StyledProductInformation = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 10px;

    > span:first-child {
      font-size: 26px;
      font-weight: 600;
      margin-right: 20px;
    }

    > span:last-child {
      display: inline-block;
      line-height: normal;
    }
  }

  > div:nth-child(2) {
    border-top: 1px solid ${colors.grayPrimary};
    padding: 15px 0;

    > div:first-child {
      width: 100%;
      margin-bottom: 15px;
    }

    > div:last-child {
      display: flex;
      line-height: 35px;

      > div:last-child {
        margin-left: auto;
      }
    }
  }
`;

const StyledLoading = styled(Loading)`
  background-color: ${colors.green};
  min-width: 144.984px;
  max-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-left: auto;

  > div {
    width: 24px;
    height: 24px;
  }
`;

const ProductInformation = ({ product, handleProductAddToCartClick }) => {
  return (
    <Fragment>
      {product && (
        <StyledProductInformation>
          <div>
            <span>{product.name}</span>
            <FavoriteButton />
          </div>
          <div>
            <div>
              <Tag text="MELHOR PREÇO" />
            </div>
            <div>
              <ProductSubtotal price={product.price} />
              <div>
                {product.loading ? (
                  <StyledLoading />
                ) : (
                  <AddToCartButton
                    handleProductAddToCartClick={handleProductAddToCartClick}
                    product={product}
                  />
                )}
              </div>
            </div>
          </div>
        </StyledProductInformation>
      )}
    </Fragment>
  );
};

ProductInformation.propTypes = propTypes;
ProductInformation.defaultProps = defaultProps;

export default ProductInformation;
