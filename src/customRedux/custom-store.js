import React from "react";
import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function setState(number) {
    state = number;
    return state;
  }

  function dispatch(action) {
    // return new state ordered by action
    state = reducer(state, action);

    // trigger subcribe function to update UI
    listeners.forEach((listner) => listner());
  }

  function subcribe(listner) {
    // Add listener function to array of listeners
    listeners.push(listner);
  }

  return {
    getState,
    setState,
    dispatch,
    subcribe,
  };
}

export default createStore(reducer);
