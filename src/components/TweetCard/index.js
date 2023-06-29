import React from "react";
import { styled } from "styled-components";
import ProfilePicture from "../Profile/ProfilePicture";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import CardStats from "./CardStats";

const Container = styled.div`
  width: 100%;
  padding: 10px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey["50016"]};
`;

const SideContainer = styled.div`
  flex-basis: 38px;
  margin-right: 10px;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  /* background: blue; */
  width: 90%;
  border: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TweetCard = (props) => {
  const { avatar, nick_name, user_name, content, imageUrl } = props;
  return (
    <Container>
      <SideContainer>
        <ProfilePicture
          src={
            avatar ||
            "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
          }
        />
      </SideContainer>
      <MainContainer>
        <CardHeader {...{ nick_name, user_name }}></CardHeader>
        <CardContent {...{ content }}></CardContent>
        <CardImage src={imageUrl} alt='image/'></CardImage>
        <CardStats></CardStats>
      </MainContainer>
    </Container>
  );
};

export default TweetCard;
