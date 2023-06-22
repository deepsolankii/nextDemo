import React from "react";
import { styled } from "styled-components";
import MainSectionLayout from "../../layouts/MainSectionLayout";
import SubSectionLayout from "../../layouts/SubSectionLayout";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: yellow;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <MainSectionLayout>main</MainSectionLayout>
      <SubSectionLayout>sub</SubSectionLayout>
    </HomeContainer>
  );
};

export default HomePage;
