import React, { useState } from "react";
import { styled } from "styled-components";
import { HeadContainer } from "../Header/MainHeader";
import { hoverBackground, primaryBackground } from "../../theme/getThemeValues";
// import TabItem from "./TabItem";

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%;
  width: 100%; */
`;

const TabListContainer = styled(HeadContainer)`
  font-size: ${(props) => props.theme.typography.body2};
  font-weight: 600;
  overflow-x: auto;
  padding: 0;
  top: 48px;
  align-items: center;
`;

const TabContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  /* padding: 0 14px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey["50016"]};
  &:hover {
    ${hoverBackground}
  }
  color: ${(props) => props.theme.palette.text.light};
  font-weight: normal;
  &.active {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;
    /* div {
      background: blue;
      width: 100%;
      height: 4px;
      border-radius: 1;
      position: absolute;
      bottom: 0px;
    } */
  }
`;
const LabelContainer = styled.span`
  /* width: max-content;
  display: flex;
  flex-direction: column; */
  padding: 10px 0;
  width: fit-content;
`;

const Activebox = styled.div`
  position: relative;
  bottom: -2px;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  &.active {
    ${primaryBackground}
  }
`;

const ChildContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;

const TabList = ({ tabitems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabChangeHandler = (e) => {
    const tabIndex = Number.parseInt(e.target.dataset.index, 10);
    console.log(tabIndex);
    if (activeIndex !== tabIndex) {
      setActiveIndex(tabIndex);
    }
  };

  return (
    <WrapperContainer>
      <TabListContainer>
        {tabitems.map((item, i) => (
          <TabContainer
            key={i}
            className={i === activeIndex ? "active" : ""}
            onClick={tabChangeHandler}
            data-index={i}
          >
            <LabelContainer onClick={tabChangeHandler} data-index={i}>
              {item.label}
            </LabelContainer>
            <Activebox
              className={i === activeIndex ? "active" : ""}
              data-index={i}
            />
          </TabContainer>
        ))}
      </TabListContainer>
      <ChildContainer>{tabitems[activeIndex].Component}</ChildContainer>
    </WrapperContainer>
  );
};

export default TabList;
