import React from "react";
import { styled } from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 18px;
`;
const ImageWrap = styled.img`
  width: 100%;
  border-radius: 18px;
`;

const CardImage = (props) => {
  const { src, alt } = props;
  return (
    <ImageContainer>
      <ImageWrap
        src={
          src ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAmMYfiaWAjYsaIoFhqZXjobMhjf5szUgCQA&usqp=CAU"
        }
        alt={alt || "Image"}
      />
    </ImageContainer>
  );
};

export default CardImage;
