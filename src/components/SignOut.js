import React from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const SignOut = () => {
  return auth.currentUser && <Button>Sign Out</Button>;
};

export default SignOut;

const Button = styled.button`
  color: #282c34;
  background: white;
  max-width: 400px;
  margin: 0 auto;
`;
