import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosAPI';

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchRelatedVideos = createAsyncThunk(
  'videos/fetchRelatedVideos',
  async ({ id, tags }) => {
    const relatedVideos = await getRelatedVideos({ id, tags });
    return relatedVideos;
  }
);

export const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
