import React from "react";
import { styled } from "styled-components";
import HomeInput from "./HomeInput";
import TweetCard from "../../components/TweetCard";

const SectionContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;

const TabSection = () => {
  return (
    <SectionContainer>
      <HomeInput />
      <div>
        <TweetCard></TweetCard>
        <TweetCard></TweetCard>
      </div>
    </SectionContainer>
  );
};

export default TabSection;
