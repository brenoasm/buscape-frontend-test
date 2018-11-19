import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import Image from '../Image';

const propTypes = {
  url: PropTypes.string,
  productId: PropTypes.number,
  active: PropTypes.bool,
  onBrokenImageUrl: PropTypes.func.isRequired,
  onSelectedImageChange: PropTypes.func
};

const defaultProps = {
  url: "",
  productId: null,
  active: false,
  onBrokenImageUrl: () => {},
  onSelectedImageChange: () => {}
};

const StyledProductPreviewImageItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${props => (props.active ? colors.toolbarPrimary : colors.grayPrimary)};
  border-radius: 3px;
  padding: 3px;
  margin: 3px;
  cursor: pointer;
`;

const ProductPreviewImageItem = ({
  url,
  productId,
  active,
  onBrokenImageUrl,
  onSelectedImageChange
}) => (
  <StyledProductPreviewImageItem
    active={active}
    onClick={() => onSelectedImageChange(productId, url)}
  >
    <Image
      src={url}
      alt="Produto"
      onBrokenImageUrl={onBrokenImageUrl}
      height={40}
      width={40}
    />
  </StyledProductPreviewImageItem>
);

ProductPreviewImageItem.propTypes = propTypes;
ProductPreviewImageItem.defaultProps = defaultProps;

export default ProductPreviewImageItem;
