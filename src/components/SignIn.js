import React from 'react';
import { auth, googleAuthProvider } from '../firebase';
import styled from 'styled-components';

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  );
};

export default SignIn;

const Button = styled.button`
  background-color: #282c34; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;
`;
