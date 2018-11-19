import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onBrokenImageUrl: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number
};

const defaultProps = {
  src: "",
  alt: "Imagem",
  width: 40,
  height: 40
};

const StyledImage = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  > img {
    height: ${props => props.height}px;
    width: ${props => props.width}px;
  }
`;

// defaultProp do onBrokenImageUrl está sendo setado aqui, pois dividir na constante separada está causando um erro
const Image = ({ src, alt, width, height, onBrokenImageUrl = null }) => (
  <StyledImage width={width} height={height}>
    <img src={src} alt={alt} onError={onBrokenImageUrl} />
  </StyledImage>
);

StyledImage.propTypes = propTypes;
StyledImage.defaultProps = defaultProps;

export default Image;
