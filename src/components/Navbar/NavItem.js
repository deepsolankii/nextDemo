import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { hoverBackground, textColor } from "../../theme/getThemeValues";

// const NavContainer = styled.div`
//   display: flex;
//   height: 50px;
//   margin: 10px;
//   /* display: flex; */
//   &:hover {
//     ${hoverBackground}
//   }
// `;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 4px 0;
  font-size: 18px;
  /* margin-top: 1px; */
  border-radius: 24.5px;
  ${textColor}
  text-transform: capitalize;
  /* height: 100%; */
  &:hover {
    .container {
      ${hoverBackground}
    }
  }
`;

const Container = styled.div`
  padding: 11px 4px;
  height: 24.5px;
  display: flex;
  width: max-content;
  justify-content: start;
  align-items: center;
  border-radius: 24px;
  /* &:hover {
    ${hoverBackground}
  } */
`;

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 4px;
`;

const TextContainer = styled.div`
  padding: 0 14px;
  letter-spacing: 0.75px;
  line-height: 22px;
  text-transform: capitalize;
  &.active {
    font-weight: 600;
  }
  /* margin-top: 5px; */
`;

const NavItem = (props) => {
  // path is URL in searchbar, ICON is react Component representing SVG, title is Icon title to display on screen
  const { path, ICON, title } = props;
  return (
    // <NavContainer>
    <StyledLink to={path}>
      {({ isActive }) => (
        <Container className='container'>
          <IconContainer>
            <ICON isActive={isActive} />
          </IconContainer>
          {title && (
            <TextContainer className={isActive ? "active" : ""}>
              {title}
            </TextContainer>
          )}
        </Container>
      )}
    </StyledLink>
    // </NavContainer>
  );
};

export default NavItem;
