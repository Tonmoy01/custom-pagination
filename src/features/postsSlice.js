import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from './postsApi';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: '',
  pages: 1,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (currentPage) => {
    const { posts, pages } = await getPosts(currentPage);

    return { posts, pages };
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload.posts;
        state.pages = action.payload.pages;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
        state.pages = 1;
      });
  },
});

export default postSlice.reducer;
