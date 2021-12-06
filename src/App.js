import "./App.css";
import store from "./store";
import { bugAdd, bugRemove, bugResolve } from "./action";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   store.dispatch(action);
  // }

  componentWillMount() {
    const unsubscribe = store.subscribe(() => {
      console.log("store changed");
    });
    store.dispatch(bugAdd);
    store.dispatch(bugResolve(1));
    unsubscribe();
    // store.dispatch(bugRemove);
  }

  render() {
    return <div>{console.log(store.getState())}</div>;
  }
}

export default App;
