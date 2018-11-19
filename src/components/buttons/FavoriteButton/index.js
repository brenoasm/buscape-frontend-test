import React from "react";
import styled from "styled-components";

import { colors } from '../../../theme';

const StyledFavoriteButton = styled.span`
  color: ${colors.toolbarPrimary};
  font-size: 20px;
`;

const FavoriteButton = () => (
  <StyledFavoriteButton>
    <i className="far fa-heart" />
  </StyledFavoriteButton>
);

export default FavoriteButton;
