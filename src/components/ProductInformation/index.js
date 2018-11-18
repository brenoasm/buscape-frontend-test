import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import Loading from "../Loading";

const propTypes = {};

const defaultProps = {};

const StyledProductInformation = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;

    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      > span {
        line-height: 30px;
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;

      > div {
        color: ${colors.white};
        background-color: ${colors.green};
        border: none;
        border-radius: 2px;
        padding: 8px;

        > span {
          text-align: center;
          font-size: 16px;

          > strong {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

const StyledLoading = styled(Loading)`
  min-width: 168px;
  max-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  padding-bottom: 16px;

  div {
    width: 24px;
    height: 24px;
  }
`;

const ProductInformation = ({ product, handleProductAddToCartClick }) => {
  return (
    <StyledProductInformation>
      <h2>{product.name}</h2>
      <div>
        <div>
          <span>MELHOR PREÇO</span>
          <div>
            <span>
              {product.price.installments}x R$ {product.price.installmentsValue}
            </span>
            <span>
              <br />
              ou R$ {product.price.value} à vista
            </span>
          </div>
        </div>
        <div>
          {product.loading ? (
            <StyledLoading />
          ) : (
            <div onClick={() => handleProductAddToCartClick(product)}>
              <span>
                Adicionar ao carrinho <strong>&gt;</strong>
              </span>
            </div>
          )}
        </div>
      </div>
    </StyledProductInformation>
  );
};

ProductInformation.propTypes = propTypes;
ProductInformation.defaultProps = defaultProps;

export default ProductInformation;
