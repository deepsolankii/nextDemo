import React from "react";
import { styled } from "styled-components";

const StatWrapper = styled.div`
  min-height: 18px;
  display: flex;
  flex-direction: row;
  line-height: 14px;
  font-size: 12px;
`;

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
`;

const TextWrapper = styled.div`
  min-width: calc(1em + 22px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.text.light};
`;

const CardSoloStat = (props) => {
  const { ICON, number } = props;
  return (
    <StatWrapper>
      <IconWrapper>
        <ICON />
      </IconWrapper>
      {number && <TextWrapper>{number}</TextWrapper>}
    </StatWrapper>
  );
};

export default CardSoloStat;
