import React from 'react';
import { Header } from '@/components/layout/header';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}> {
  public render() {
    return (
      <>
        <div>Hello, app!</div>
        <Header />
      </>
    );
  }
}

export default hot(module)(App);
