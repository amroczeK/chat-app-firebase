import React from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const ChatMsg = ({ message }) => {
  const { text, uid, photoURL, displayName } = message;

  const messageState = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <Container msgState={messageState}>
        <h1>{displayName}</h1>
        <MessageContainer msgState={messageState}>
          <img
            src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
            alt='avatar'
          />
          <p>{text}</p>
        </MessageContainer>
      </Container>
    </>
  );
};

export default ChatMsg;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${({ msgState }) => (msgState === 'sent' ? 'row-reversed' : 'row')};
  align-self: ${({ msgState }) => (msgState === 'sent' ? 'flex-end' : 'flex-start')};
  border-radius: 25px;
  margin-bottom: 15px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0px 5px;
  }
  p {
    word-wrap: break-word;
    border-radius: 25px;
    max-width: 500px;
    line-height: 24px;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    color: ${({ msgState }) => (msgState === 'sent' ? 'white' : 'black')};
    background: ${({ msgState }) => (msgState === 'sent' ? '#0b93f6' : 'white')};
  }
  h1 {
    display: flew;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    padding-bottom: 5px;
    font-size: 1rem;
    font-weight: lighter;
    color: white;
    margin: 0 8px;
    align-self: ${({ msgState }) => (msgState === 'sent' ? 'flex-end' : 'flex-start')};
    visibility: ${({ msgState }) => (msgState === 'sent' ? 'hidden' : 'visible')};
  }
`;
