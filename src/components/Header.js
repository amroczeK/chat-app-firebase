import React from 'react';
import SignOut from './SignOut';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <div className={'header'}>
        <img alt='firebase-logo' src={'/firebase-logo.png'} />
        <h1>Firebase Chat App</h1>
      </div>
      <div className='sign-out'>
        <SignOut />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #252c36;
  height: 10vh;
  min-height: 50px;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 728px;
  top: 0;
  z-index: 99;
  box-sizing: border-box;
  .header {
    padding-right: 15px;
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 50px;
    min-width: 75%;
    color: white;
    h1 {
      font-size: 1.75rem;
    }
  }
  .sign-out {
    width: 100%;
    position: relative;
    justify-content: center;
  }
`;
