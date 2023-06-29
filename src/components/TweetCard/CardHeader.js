import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import ThreeDotIcon from "../../assests/Common/ThreeDotIcon";

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NameContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
`;

const IconContainer = styled.div`
  margin-left: 18px;
  flex-shrink: 1;
  width: 18px;
`;

const ProfileLinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const NickNameContainer = styled.div`
  flex-shrink: 1;
  text-transform: capitalize;
  padding-right: 2px;
  ${(props) => props.theme.typography.subtitle1}
  &:hover {
    text-decoration: underline;
  }
`;

const UserNameContainer = styled.div`
  padding: 0 4px;
  font-size: 14px;
  color: ${(props) => props.theme.palette.text.light};
  display: flex;
  align-items: center;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2px;
  margin-top: -5px;
  color: inherit;
`;

const DateContainer = styled.div`
  color: inherit;
`;

const CardHeader = (props) => {
  const { nick_name, user_name, created_at } = props;
  return (
    <HeadContainer>
      <NameContainer>
        <ProfileLinkContainer to={user_name || "/test"}>
          <NickNameContainer>{nick_name || "test"}</NickNameContainer>
          <UserNameContainer>
            @{user_name || "test"}
            <DotContainer>.</DotContainer>
            <DateContainer>{created_at || "1h"}</DateContainer>
          </UserNameContainer>
        </ProfileLinkContainer>
      </NameContainer>
      <IconContainer>
        <ThreeDotIcon />
      </IconContainer>
    </HeadContainer>
  );
};

export default CardHeader;
