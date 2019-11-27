import React, { FunctionComponent, useCallback } from 'react';
import 'antd/lib/pagination/style/css';

import styles from './app-footer.scss';
import { Panel, Content } from '../panel';

export const AppFooter: FunctionComponent<{}> = () => {

  const handleOnShowSizeChange = useCallback(() => {
    console.log('change');
  }, []);

  return (
  <footer className={styles.root}>
    <div className={styles.footer}>knowledge database 2019</div>
   </footer>
  );
};
