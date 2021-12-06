import * as actionTypes from "./actionTypes";

export const bugAdd = {
  type: actionTypes.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
};

export const bugRemove = {
  type: actionTypes.BUG_REMOVED,
  payload: {
    id: 1,
  },
};

export const bugResolve = (id) => ({
  type: actionTypes.BUG_RESOLVED,
  payload: {
    id,
  },
});
