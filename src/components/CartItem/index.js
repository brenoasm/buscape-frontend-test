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

const CartItem = () => {
  return (
    <StyledCartItem>
      <img
        src="https://imgmanagercb-a.akamaihd.net/tv/smart-tv-hd-samsung-serie-4-led-32-polegadas-un32j4300ag_300x300-PU95547_1.jpg"
        alt="Produto"
      />
      <div>
        <div>
          <span>Smartphone Apple IPhone 7 128GB</span>
          <div>
            <span>10x R$ 366,56</span>
            <span>ou R$ 3.500,40 à vista</span>
          </div>
        </div>
        <div>
          <i className="fas fa-times" />
        </div>
      </div>
    </StyledCartItem>
  );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
