import React, { FunctionComponent, useState, useEffect } from 'react';
import app from '@/services/firebase';

export const AuthContext = React.createContext({ currentUser: null });

export const Auth: FunctionComponent<{}> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // @ts-ignore
    app.auth().onAuthStateChanged(setCurrentUser);
  }, [])

  return (
    <AuthContext.Provider
      value={{ currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}