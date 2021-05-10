import React, { useRef, useState } from 'react';
import { auth, firestore } from '../firebase';
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

    await messagesRef.add({
      text: formValue,
      createdAt: firestore.FieldValue.serverTimestamp(),
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
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder='Message'
        />
        <button type='submit' disabled={!formValue}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ChatRoom;

const Main = styled.main``;
