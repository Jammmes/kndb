import React, { FunctionComponent } from 'react';
import styles from './header.scss';

export const Header: FunctionComponent<{}> = () => {
  return <div className = {styles.header}>This is header</div>;
};
