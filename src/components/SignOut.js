import React, { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';
import { auth } from '../firebase';
import styled from 'styled-components';

const SignOut = () => {
  const { user } = useContext(AuthContext);
  return user && <Button onClick={() => auth.signOut()}>Sign Out</Button>;
};

export default SignOut;

const Button = styled.button`
  display: flex;
  background-color: #151a21;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;
  border-radius: 25px;
  &:hover {
    background-color: #323d4d;
  }
`;
