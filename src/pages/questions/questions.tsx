import React, { FunctionComponent } from 'react';

import styles from './questions.scss';
import { Link } from 'react-router-dom';

export const Questions: FunctionComponent<{}> = () => {
  return <div className={styles.root}>
    <h1>Questions</h1>
    <Link to='/'><h2>Home</h2></Link>
  </div>;
}
