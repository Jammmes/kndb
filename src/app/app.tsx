import * as React from "react";
import { hot } from "react-hot-loader";
import { Header } from "../components/header";

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
