import React, { useState } from "react";
import { styled } from "styled-components";
import SearchIcon from "../../assests/NavIcons/SearchIcon";
import CancelIcon from "../../assests/Common/CancelIcon";
import { primaryBackground } from "../../theme/getThemeValues";

const SearchContainer = styled.label`
  background-color: ${(props) => props.theme.palette.background.neutral};
  width: 100%;
  height: 100%;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 48px;
  display: flex;
`;

const IconWrapper = styled.div`
  padding-left: 11px;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  /* flex-grow: 1; */
`;

const SearchWrapper = styled.div`
  width: 80%;
  /* flex-grow: 1; */
  padding: 0 11px;
`;

const SearchInput = styled.input`
  background: inherit;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
`;

const CancelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-grow: 1;
  padding-left: 5px;
  padding-top: 5px;
  cursor: pointer;
  ${primaryBackground}
`;

const SearchBar = () => {
  const [isCancelVisible, setIsCancelVisible] = useState(false);

  return (
    <SearchContainer htmlFor='search'>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <SearchWrapper>
        <SearchInput id='search' placeholder='Search Twitter' />
      </SearchWrapper>
      {isCancelVisible && (
        <CancelContainer>
          <CancelIcon />
        </CancelContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
