import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdd: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: "Project 1",
      });
    },
  },
});

export default slice.reducer;
