import React from "react";
import { styled } from "styled-components";
import ReplyIcon from "../../assests/TweetIcons/ReplyIcon";
import CardSoloStat from "./CardSoloStat";
import RetweetIcon from "../../assests/TweetIcons/RetweetIcon";
import LikeIcon from "../../assests/TweetIcons/LikeIcon";
import SaveImageIcon from "../../assests/Common/SaveImageIcon";

const StatsContainer = styled.div`
  max-width: 425px;
  margin-top: 11px;
  display: flex;
  justify-content: space-between;
`;

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
`;

const CardStats = () => {
  return (
    <StatsContainer>
      <CardSoloStat ICON={ReplyIcon} number={15} />
      <CardSoloStat ICON={RetweetIcon} number={15} />
      <CardSoloStat ICON={LikeIcon} number={15} />
      <CardSoloStat ICON={SaveImageIcon} />
    </StatsContainer>
  );
};

export default CardStats;
