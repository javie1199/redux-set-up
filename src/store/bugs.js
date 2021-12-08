// action types
import { createSlice } from "@reduxjs/toolkit";

// action object
let lastId = 0;

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    // actions type: action handler
    bugAdd: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemove: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },

    bugResolve: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const { bugAdd, bugRemove, bugResolve } = slice.actions;

export default slice.reducer;
