import React from 'react';
import { auth } from '../firebase';
import styled from 'styled-components';

const ChatMsg = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageState = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <Container>
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
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
  .sent {
    color: white;
    background: #0b93f6;
    align-self: flex-end;
  }
  .received {
    flex-direction: row-reverse;
    background: #e5e5ea;
    color: black;
  }
`;
