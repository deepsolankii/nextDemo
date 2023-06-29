import React from "react";
import { styled } from "styled-components";
import MainSectionLayout from "../../layouts/MainSectionLayout";
import SubSectionLayout from "../../layouts/SubSectionLayout";
import MainHeader from "../../components/Header/MainHeader";
import TabList from "../../components/Tabs/TabList";
import TabSection from "./TabSection";
import SearchBar from "../../components/SearchBar/SearchBar";
import SubHeader from "../../components/Header/SubHeader";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
`;

const HomePage = () => {
  const tabConfig = [
    { label: "for You", Component: <TabSection /> },
    { label: "following", Component: <TabSection /> },
  ];
  return (
    <HomeContainer>
      <MainSectionLayout>
        <MainHeader>home</MainHeader>
        <TabList tabitems={tabConfig} />
      </MainSectionLayout>
      <SubSectionLayout>
        <SubHeader>
          <SearchBar />
        </SubHeader>
      </SubSectionLayout>
    </HomeContainer>
  );
};

export default HomePage;
