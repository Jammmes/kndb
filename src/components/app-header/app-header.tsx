import React, { FunctionComponent } from 'react';
import { Input, PageHeader } from 'antd';
const { Search } = Input;
import 'antd/lib/input/style/css';
import 'antd/lib/page-header/style/css';

import styles from './app-header.scss';

export const AppHeader: FunctionComponent<{}> = () => {
  return (
    <div className={styles.root}>
      <PageHeader title='This website provides a knowledge database.'>
        <Search placeholder='input your question' onSearch={value => console.log(value)} enterButton />
      </PageHeader>
    </div>
  )
}
