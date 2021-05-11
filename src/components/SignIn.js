import React from 'react';
import { auth, googleAuthProvider } from '../firebase';
import styled from 'styled-components';
import { Google } from '@styled-icons/boxicons-logos/Google';

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <Container>
      <Button onClick={signInWithGoogle}>
        <Icon />
        <strong>Log in with Google</strong>
      </Button>
      <p>By logging in you accept our Privacy Policy and Terms of Service.</p>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin-top: 25px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34; /* Green */
  border: none;
  border-radius: 25px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  strong {
    font-size: 1.25rem;
    text-align: center;
  }
  &:hover {
    background-color: #323d4d;
  }
`;

const Icon = styled(Google)`
  color: white;
  height: 40px;
  width: 40px;
  margin-right: 30px;
`;
