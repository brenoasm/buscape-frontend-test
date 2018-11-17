import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

const propTypes = {};

const defaultProps = {};

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
}) => {
  return (
    <StyledProductPreviewImageItem
      active={active}
      onClick={() => onSelectedImageChange(productId, url)}
    >
      <img
        onError={event => onBrokenImageUrl(event)}
        src={url}
        alt="Imagem do Produto"
      />
    </StyledProductPreviewImageItem>
  );
};

ProductPreviewImageItem.propTypes = propTypes;
ProductPreviewImageItem.defaultProps = defaultProps;

export default ProductPreviewImageItem;
