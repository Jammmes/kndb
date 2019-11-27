import React, { FunctionComponent } from 'react';
import 'antd/lib/pagination/style/css';

import styles from './app-footer.scss';

export const AppFooter: FunctionComponent<{}> = () => {

  return (
  <footer className={styles.root}>
    <div className={styles.footer}>knowledge database 2019</div>
   </footer>
  );
};
