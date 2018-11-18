import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

const propTypes = {};

const defaultProps = {};

const StyledCartItem = styled.div`
  margin-top: 2px;
  padding: 20px;
  background-color: ${colors.toolbarItems};
  align-self: stretch;
  display: flex;

  > img {
    height: 80px;
  }

  > div {
    display: flex;
    width: 100%;

    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 10px;
      line-height: 0.9em;
      font-weight: 700;
      height: 100%;

      > span {
        color: ${colors.white};
      }

      > div {
        display: flex;
        flex-direction: column;
        line-height: 1.4em;
      }
    }

    > div:last-child {
      margin-left: auto;
      padding: 0 10px;

      > i {
        height: 15px;
      }
    }
  }
`;

const CartItem = ({
  cartItem,
  handleProductRemoveClick,
  onBrokenImageUrl
}) => {
  return (
    <StyledCartItem>
      <img
        src={cartItem.imageUrl}
        alt="Produto"
        onError={event => onBrokenImageUrl(event)}
      />
      <div>
        <div>
          <span>{cartItem.name}</span>
          <div>
            <span>{cartItem.price.installments}x R$ {cartItem.price.installmentValue}</span>
            <span>ou R$ {cartItem.price.value} à vista</span>
          </div>
        </div>
        <div onClick={() => handleProductRemoveClick(cartItem)}>
          <i className="fas fa-times" />
        </div>
      </div>
    </StyledCartItem>
  );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
