import React from "react";
import { styled } from "styled-components";
import { HeadContainer } from "../Header/MainHeader";

const TabListContainer = styled(HeadContainer)`
  font-size: ${(props) => props.theme.typography.body2};
  font-weight: 600;
  top: 48px;
  overflow-x: auto;
  display: flex;
`;

const TabContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 0 14px;
`;

const ChildContainer = styled.div`
  height: 100%;
`;

const TabItem = (props) => {
  const { label, Component } = props;
  return (
    <>
      <TabListContainer>
        <TabContainer>{label}</TabContainer>
      </TabListContainer>
      <ChildContainer>{Component}</ChildContainer>
    </>
  );
};

export default TabItem;
