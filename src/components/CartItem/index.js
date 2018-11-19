import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import CartSubtotal from '../CartSubtotal';
import Image from '../Image';

const propTypes = {
  cartItem: PropTypes.object.isRequired,
  handleProductRemoveClick: PropTypes.func,
  onBrokenImageUrl: PropTypes.func.isRequired
};

const defaultProps = {
  cartItem: null,
  handleProductRemoveClick: () => {},
  onBrokenImageUrl: () => {}
};

const StyledCartItem = styled.div`
  margin-top: 2px;
  padding: 20px;
  background-color: ${colors.toolbarItems};
  align-self: stretch;
  display: flex;

  > div: last-child {
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

const CartItem = ({ cartItem, handleProductRemoveClick, onBrokenImageUrl }) => {
  return (
    <Fragment>
      {cartItem && (
        <StyledCartItem>
          <Image
            src={cartItem.imageUrl}
            alt="Produto"
            onBrokenImageUrl={onBrokenImageUrl}
            height={80}
            width={80}
          />
          <div>
            <div>
              <span>{cartItem.name}</span>
              <CartSubtotal price={cartItem.price} />
            </div>
            <div onClick={() => handleProductRemoveClick(cartItem)}>
              <i className="fas fa-times" />
            </div>
          </div>
        </StyledCartItem>
      )}
    </Fragment>
  );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
