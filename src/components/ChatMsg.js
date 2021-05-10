import React from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const ChatMsg = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageState = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <Container msgState={messageState}>
        <img
          src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
          alt='avatar'
        />
        <p>{text}</p>
      </Container>
    </>
  );
};

export default ChatMsg;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ msgState }) => (msgState === 'sent' ? 'row-reversed' : 'row')};
  align-self: ${({ msgState }) => (msgState === 'sent' ? 'flex-end' : 'flex-start')};
  border-radius: 25px;
  margin-bottom: 12px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
  p {
    border-radius: 25px;
    max-width: 500px;
    line-height: 24px;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    color: ${({ msgState }) => (msgState === 'sent' ? 'white' : 'black')};
    background: ${({ msgState }) => (msgState === 'sent' ? '#0b93f6' : 'white')};
  }
`;
