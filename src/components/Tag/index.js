import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from '../../theme';

const propTypes = {
  text: PropTypes.string.isRequired
};

const defaultProps = {
  text: ''
};

const StyledTag = styled.span`
  font-size: 10px;
  text-align: center;
  color: ${colors.white};
  position: relative;
  background: ${colors.blue};
  border-radius: 2px;
  padding: 5px 10px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:before {
    content: "";
    position: absolute;
    right: -10px;
    bottom: 0;
    border-left: 10px solid ${colors.blue};
    border-top: 10px solid transparent;
    border-bottom: 13px solid transparent;
  }
`;

const Tag = ({
  text
}) => (
  <StyledTag>
    {text}
  </StyledTag>
);

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
