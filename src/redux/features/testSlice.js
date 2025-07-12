import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosPublic } from '../../utils/axiosPublic';

export const createVideo = createAsyncThunk(
  'test/createVideo',
  async (video) => {
    const response = await addVideo(video);
    return response;
  }
);
const addVideo = async (video) => {
  const response = await axiosPublic.post('/videos', video);
  return response?.data;
};

export const testSlice = createSlice({
  name: 'test',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVideo.pending, (state) => {
        console.log('pending', state);
      })
      .addCase(createVideo.fulfilled, (state, action) => {
        console.log('fulfilled', action.payload);
        state = action.payload;
      });
  },
});

export default testSlice.reducer;
