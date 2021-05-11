import React from 'react';
import SignOut from './SignOut';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Firebase Chat App</h1>
      <SignOut />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #252C36;
  height: 10vh;
  min-height: 50px;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 728px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 10px;
  box-sizing: border-box;
  h1 {
    padding-left: 15px;
  }
`;
