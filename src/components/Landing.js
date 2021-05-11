import React, { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';
import styled from 'styled-components';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';

const Landing = () => {
  const { user } = useContext(AuthContext);
  console.log('user', user);
  return (
    <>
      <Section>{user ? <ChatRoom /> : <SignIn />}</Section>
    </>
  );
};

export default Landing;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #151a21;
`;
