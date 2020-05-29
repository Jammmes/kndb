import React, { FunctionComponent } from 'react';

import styles from './home.scss';
import app from '@/services/firebase';
import { Link } from 'react-router-dom';

export const Home: FunctionComponent<{}> = () => {
  return <div className={styles.root}>
    <h1>Home</h1>
    <button onClick={() => app.auth().signOut()}>Sign out</button>
    <Link to='/questions'><h2>QUESTIONS</h2></Link>
  </div>;
};
