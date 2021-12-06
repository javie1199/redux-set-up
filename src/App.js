import configureStore from "./store/configureStore";
import * as action from "./store/bugs";
import React from "react";

const store = configureStore();
class App extends React.Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   store.dispatch(action);
  // }

  componentWillMount() {
    // const unsubscribe = store.subscribe(() => {
    //   console.log("store changed");
    // });
    store.dispatch(action.bugAdd("Bug 1"));
    store.dispatch(action.bugAdd("Bug 2"));
    store.dispatch(action.bugAdd("Bug 3"));
    store.dispatch(action.bugResolve(1));
    // unsubscribe();
    // store.dispatch(bugRemove);
  }

  render() {
    return <div>{console.log(store.getState())}</div>;
  }
}

export default App;
