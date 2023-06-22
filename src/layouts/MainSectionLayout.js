import React from "react";
import { styled } from "styled-components";

const MainContainer = styled.div`
  max-width: 600px;
  overflow-y: auto;
  height: 100%;
`;

const MainSectionLayout = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainSectionLayout;
