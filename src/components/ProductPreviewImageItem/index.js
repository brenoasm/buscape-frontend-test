import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

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

  > img {
    height: 40px;
    width: 40px;
  }
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
    <img
      onError={onBrokenImageUrl}
      src={url}
      alt="Imagem do Produto"
    />
  </StyledProductPreviewImageItem>
);

ProductPreviewImageItem.propTypes = propTypes;
ProductPreviewImageItem.defaultProps = defaultProps;

export default ProductPreviewImageItem;
