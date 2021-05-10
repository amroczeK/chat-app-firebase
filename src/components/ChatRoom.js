import React, { useRef, useState } from 'react';
import { auth, firestore, getFirestoreTimestamp } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMsg from './ChatMsg';
import styled from 'styled-components';

const ChatRoom = () => {
  const ref = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    let timestamp = await getFirestoreTimestamp();
    await messagesRef.add({
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL,
    });

    setFormValue('');
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Main>
        {messages && messages.map((msg) => <ChatMsg key={msg.id} message={msg} />)}
        <span ref={ref}></span>
      </Main>
      <Form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder='Type message...'
        />
        <button type='submit' disabled={!formValue}>
          Send
        </button>
      </Form>
    </>
  );
};

export default ChatRoom;

const Main = styled.main`
  padding: 10px;
  height: 80vh;
  margin: 10vh 0 10vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  height: 10vh;
  position: fixed;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 100%;
  max-width: 728px;
  display: flex;
  font-size: 1.5rem;
  button {
    width: 20%;
    background-color: rgb(56, 56, 143);
  }
  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: rgb(58, 58, 58);
    color: white;
    outline: none;
    border: none;
    padding: 0 10px;
  }
`;
