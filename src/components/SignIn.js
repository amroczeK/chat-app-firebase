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
  color: #282c34;
  background: white;
  max-width: 400px;
  margin: 0 auto;
`;
