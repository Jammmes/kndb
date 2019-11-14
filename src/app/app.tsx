import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import '@/styles/global.scss';

import { Home } from '@/pages/home';
import { Questions } from '@/pages/questions';

class App extends React.Component<{}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Header> Header</Header>
          <Content>
            <Switch>
              <Route path='/home' component = {Home} />
              <Route path='/questions' component = {Questions} />
              <Redirect to = '/home' />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
