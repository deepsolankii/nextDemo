import React from "react";
import { styled } from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  font-size: 14px;
  padding-bottom: 10px;
`;

const CardContent = (props) => {
  const { content } = props;
  return (
    <ContentContainer>
      {content ||
        "We are all like fireworks: We climb, we shine and always go our separate ways and become further apart"}
    </ContentContainer>
  );
};

export default CardContent;
