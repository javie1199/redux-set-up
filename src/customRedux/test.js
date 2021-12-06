import store from "./store";
import * as action from "./action";

function test() {
  // store.setState(5);
  store.subscribe(() => {
    console.log("state change!");
  });
  store.dispatch(action.bugAdd);
  console.log(store.getState());
}

export default test();
