import React, { useState, createContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
