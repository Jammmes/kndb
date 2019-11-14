import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}> {
  public render() {
    return (
      <Layout>
        <Header> Header</Header>
        <Content> Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default hot(module)(App);
