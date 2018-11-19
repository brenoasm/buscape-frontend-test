import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ProductPreviewImageItem from "../ProductPreviewImageItem";
import Image from '../Image';

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
        <Image
          src={selectedImage}
          alt="Produto"
          onBrokenImageUrl={onBrokenImageUrl}
          height={200}
          width={200}
        />
      </div>
    </StyledProductPreviewImageList>
  );
};

ProductPreviewImageList.propTypes = propTypes;
ProductPreviewImageList.defaultProps = defaultProps;

export default ProductPreviewImageList;
