import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogss: (state, action) => {
      state.blogs = action.payload;
    },
    clearBlogs: (state) => {
        state.blogs = []; 
      },
  },
});

export const {setBlogss, clearBlogs} = blogSlice.actions; 

export default blogSlice.reducer; 