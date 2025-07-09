import { configureStore } from '@reduxjs/toolkit';
import relatedVideosReducer from './features//relatedVideos/relatedVideosSlice';
import filterReducer from './features/filter/filterSlice';
import tagsReducer from './features/tags/tagsSlice';
import videoReducer from './features/video/videoSlice';
import videosReducer from './features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});
