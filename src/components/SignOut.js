import React from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const SignOut = () => {
  return auth.currentUser && <Button onClick={() => auth.signOut()}>Sign Out</Button>;
};

export default SignOut;

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
