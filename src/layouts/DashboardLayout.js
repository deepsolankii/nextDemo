import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { bgColor, hoverBackground } from "../theme/getThemeValues";
import NavList from "../components/Navbar/NavList";
import ProfilePic from "../assests/Images/profileImage.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background: red; */
  margin: 0;
`;

const SideContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
  /* background: blue; */
  /* #F7F7F7 */
  flex-grow: 1;
  z-index: 3;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* background: green; */
  flex-grow: 1;
`;

const WrapperOutlet = styled.div`
  width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: yellow; */
`;

const Sidebar = styled.div`
  width: 275px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${bgColor}
`;

const NavContainer = styled.div`
  margin-left: 8px;
`;
const ProfileContainer = styled.div`
  /* width: 100%; */
  height: 38px;
  border-radius: 38px;
  padding: 11px;
  margin: 0 8px;
  display: flex;
  &:hover {
    ${hoverBackground}
  }
`;

const ProfileIconContainer = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
`;

const NameContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: max-content;
  height: 100%;
  ${(props) => props.theme.typography.caption}
  p {
    color: ${(props) => props.theme.palette.grey["600"]};
  }
  div {
    ${(props) => props.theme.typography.body2}
    font-weight: 600;
  }
`;

const DashboardLayout = () => {
  return (
    <Container>
      <SideContainer>
        <Sidebar>
          <NavContainer>
            <NavList />
          </NavContainer>
          <ProfileContainer>
            <ProfileIconContainer src={ProfilePic} />
            <NameContainer>
              <div>Deep Solanki</div>
              <p>@_deepsolanki</p>
            </NameContainer>
          </ProfileContainer>
        </Sidebar>
      </SideContainer>
      <MainContainer>
        <WrapperOutlet>
          <Outlet />
        </WrapperOutlet>
      </MainContainer>
    </Container>
  );
};

export default DashboardLayout;
