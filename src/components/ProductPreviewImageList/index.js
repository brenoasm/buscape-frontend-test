import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import ProductPreviewImageItem from "../ProductPreviewImageItem";

const propTypes = {};

const defaultProps = {};

const StyledProductPreviewImageList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > div:first-child {
    display: flex;
    flex-direction: column;
  }

  > div:last-child {
    > img {
      height: 200px;
    }
  }
`;

const ProductPreviewImageList = ({
  images,
  productId,
  selectedImage,
  onBrokenImageUrl,
  onSelectedImageChange
}) => {
  return (
    <StyledProductPreviewImageList>
      <div>
        {images &&
          images.map(image => (
            <ProductPreviewImageItem
              key={image.url}
              productId={productId}
              url={image.url}
              active={image.selected}
              onBrokenImageUrl={onBrokenImageUrl}
              onSelectedImageChange={onSelectedImageChange}
            />
          ))}
      </div>
      <div>
        <img
          onError={event => onBrokenImageUrl(event)}
          src={selectedImage}
          alt="Imagem do Produto"
        />
      </div>
    </StyledProductPreviewImageList>
  );
};

ProductPreviewImageList.propTypes = propTypes;
ProductPreviewImageList.defaultProps = defaultProps;

export default ProductPreviewImageList;
