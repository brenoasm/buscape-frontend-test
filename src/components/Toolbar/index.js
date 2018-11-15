import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import posed from 'react-pose';

import { colors } from "../../theme";

import Cart from '../Cart';
import ShoppingResume from '../ShoppingResume';

const propTypes = {};

const defaultProps = {};

const StyledToolbar = styled.div`
  min-height: 80px;
  background-color: ${colors.toolbarPrimary};
  box-shadow: 0px 1px 1px ${colors.toolbarPrimary};

  > div:first-child {
    display: flex;
    align-items: center;
    padding: 10px 30px;

    > img {
      height: 72px;
    }

    > span {
      margin-left: auto;
    }
  }

  > div:last-child {
    background-color: ${colors.toolbarSecondary};
    overflow: hidden;
  }
`;

// Arrumar uma forma melhor de separar esse componente de animação
const WithSlideUpDown = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const Toolbar = ({
  toggleCartView,
  open
}) => {
  return (
    <StyledToolbar>
      <div>
        <img
          src="https://imagebuscape-a.akamaihd.net/material/buscape.png"
          alt="Buscape Logo"
        />
        <span onClick={() => toggleCartView()}>
          <i className="fas fa-bars fa-2x" />
        </span>
      </div>
      <WithSlideUpDown pose={open ? 'open' : 'closed'}>
        <Cart />
        <ShoppingResume />
      </WithSlideUpDown>
    </StyledToolbar>
  );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
