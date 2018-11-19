import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import posed from "react-pose";

import { colors } from "../../theme";

import { onBrokenImageUrl } from '../../utils/image-utils';

import CartContainer from "../../containers/CartContainer";
import Image from '../Image';

const propTypes = {
  totalItems: PropTypes.number,
  toggleMenuVisibility: PropTypes.func,
  menuOpen: PropTypes.bool
};

const defaultProps = {
  totalItems: 0,
  toggleMenuVisibility: () => {},
  menuOpen: 0
};

const StyledToolbar = styled.div`
  min-height: 80px;
  background-color: ${colors.toolbarSecondary};
  box-shadow: 0px 1px 1px ${colors.toolbarPrimary};

  > div:first-child {
    display: flex;
    align-items: center;
    padding: 15px 30px;

    > span {
      margin-left: auto;

      > span {
        padding: 1px;
        border-radius: 50%;
        background-color: ${colors.red};
        position: absolute;
        right: 60px;
        top: 50px;
        height: 28px;
        width: 28px;
        line-height: 28px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        color: ${colors.white};
      }
    }
  }

  ${props =>
    props.totalItems > 0
      ? `
      > div:last-child {
        background-color: ${colors.toolbarSecondary};
        overflow: hidden;
        z-index: 1000;
      }
    `
      : `
      > div:last-child {
        background-color: ${colors.toolbarSecondary};
        overflow: hidden;
        font-weight: 700;
        color: ${colors.white};

        > div {
          width: 100%;
          text-align: center;
          border-top: 2px solid ${colors.toolbarPrimary};
          padding: 10px;
        }
      }
    `}
`;

// Arrumar uma forma melhor de separar esse componente de animação
const WithSlideUpDown = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

const Toolbar = ({ totalItems, toggleMenuVisibility, menuOpen }) => (
  <StyledToolbar totalItems={totalItems}>
    <div>
      <Image
        src="https://imagebuscape-a.akamaihd.net/material/buscape.png"
        alt="Buscape Logo"
        onBrokenImageUrl={onBrokenImageUrl}
        height={72}
        width={110}
      />
      <span onClick={() => toggleMenuVisibility()}>
        <i className="fas fa-bars fa-3x" />
        {totalItems > 0 && <span>{totalItems}</span>}
      </span>
    </div>
    <WithSlideUpDown pose={menuOpen ? "open" : "closed"}>
      {totalItems > 0 ? (
        <CartContainer />
      ) : (
        <div>Não há produtos no carrinho</div>
      )}
    </WithSlideUpDown>
  </StyledToolbar>
);

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
