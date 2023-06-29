import React from "react";
import { styled } from "styled-components";
import ProfilePic from "../../assests/Images/profileImage.jpg";
import ProfilePicture from "../../components/Profile/ProfilePicture";
import InputArea from "../../components/UI/button/InputArea";
import { ButtonGlobal } from "../../components/UI/button/Button";
import GalleryIcon from "../../assests/Common/GalleryIcon";
import { hoverBackground } from "../../theme/getThemeValues";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 16px 14px 0px 14px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey["50016"]};
`;

const SideContainer = styled.div`
  flex-basis: 38px;
  margin-right: 10px;
`;

const MainContainer = styled.div`
  /* background: blue; */
  width: 90%;
  border: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey["50016"]};
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.8;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
  padding-bottom: 7px;
`;

const TweetButton = styled(ButtonGlobal)`
  min-width: 32px;
  min-height: 32px;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 0 14px;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background: #edf7fd;
  }
`;
// const ProfileContainer = styled.div`
// padding-top:14px;;
// `

const HomeInput = () => {
  return (
    <Container>
      <SideContainer>
        <ProfilePicture src={ProfilePic} />
      </SideContainer>
      <MainContainer>
        <InputWrapper>
          <InputArea />
        </InputWrapper>
        <ButtonContainer>
          <IconWrapper>
            <GalleryIcon />
          </IconWrapper>
          <TweetButton variant='primary'>Tweet</TweetButton>
        </ButtonContainer>
      </MainContainer>
    </Container>
  );
};

export default HomeInput;
