import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { PrivateRoute } from '@/components/private-route';

import '@/styles/global.scss';

import { Auth } from '@/pages/auth';
import { Home } from '@/pages/home';
import { Questions } from '@/pages/questions';
import { Login } from '@/pages/login';
import { NotFound } from '@/pages/not-found/not-found';
import { SignUp } from '@/pages/sign-up/sign-up';

// TO DO Sign Up
class App extends React.Component<{}> {
  public render() {
    return (
      <Auth>
        <Router>
          <Layout>
            <Header> Header</Header>
            <Content>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/questions' component={Questions} />
                <Route path='/login' component={Login} />
                <Route path='/registration' component={SignUp} />
                <Route component={NotFound} />
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Router>
      </Auth>
    );
  }
}

export default hot(module)(App);
