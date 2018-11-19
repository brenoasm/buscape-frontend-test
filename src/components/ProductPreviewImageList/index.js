import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductPreviewImageItem from "../ProductPreviewImageItem";

const propTypes = {
  images: PropTypes.array,
  productId: PropTypes.number,
  selectedImage: PropTypes.string,
  onBrokenImageUrl: PropTypes.func.isRequired,
  onSelectedImageChange: PropTypes.func
};

const defaultProps = {
  images: null,
  productId: null,
  selectedImage: "",
  onBrokenImageUrl: () => {},
  onSelectedImageChange: () => {}
};

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
          onError={onBrokenImageUrl}
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
