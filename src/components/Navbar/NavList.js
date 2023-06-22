import React from "react";
import { NavigationList } from "./NavConfig";
import NavItem from "./NavItem";
import { styled } from "styled-components";
import { ButtonGlobal } from "../UI/button/Button";

// const TweetButton = styled(NavLink)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 10px 10px 8px 8px;
//   width: 80%;
//   height: 52px;
//   border-radius: 52px;
//   color: #fff;
//   ${primaryBackground}
// `;
const TweetButton = styled(ButtonGlobal)`
  width: 90%;
  min-height: 47px;
  border-radius: 50px;
  margin-top: 7px;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const NavList = () => {
  // return <div>NavList</div>;
  console.log(NavigationList);
  return (
    <>
      {NavigationList.map((link, i) => (
        <NavItem key={i} {...link.items[0]} />
      ))}
      <TweetButton variant='primary'>Tweet</TweetButton>
    </>
  );
};

export default NavList;
