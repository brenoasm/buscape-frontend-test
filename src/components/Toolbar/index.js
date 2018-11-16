import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import posed from "react-pose";

import { colors } from "../../theme";

import Cart from "../Cart";
import ShoppingResume from "../ShoppingResume";

const propTypes = {};

const defaultProps = {};

const StyledToolbar = styled.div`
  min-height: 80px;
  background-color: ${colors.toolbarSecondary};
  box-shadow: 0px 1px 1px ${colors.toolbarPrimary};

  > div:first-child {
    display: flex;
    align-items: center;
    padding: 15px 30px;

    > img {
      height: 72px;
    }

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

  > div:last-child {
    background-color: ${colors.toolbarSecondary};
    overflow: hidden;
    z-index: 1000;
  }
`;

// Arrumar uma forma melhor de separar esse componente de animação
const WithSlideUpDown = posed.div({
  closed: { height: 0 },
  open: { height: "auto" }
});

const Toolbar = ({ toggleCartView, open }) => {
  return (
    <StyledToolbar>
      <div>
        <img
          src="https://imagebuscape-a.akamaihd.net/material/buscape.png"
          alt="Buscape Logo"
        />
        <span onClick={() => toggleCartView()}>
          <i className="fas fa-bars fa-3x" />
          <span>2</span>
        </span>
      </div>
      <WithSlideUpDown pose={open ? "open" : "closed"}>
        <Cart />
        <ShoppingResume />
      </WithSlideUpDown>
    </StyledToolbar>
  );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
