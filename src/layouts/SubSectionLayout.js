import React from "react";
import { styled } from "styled-components";

const SubContainer = styled.div`
  width: 350px;
  margin-right: 10px;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SubSectionLayout = ({ children }) => {
  return <SubContainer>{children}</SubContainer>;
};

export default SubSectionLayout;
