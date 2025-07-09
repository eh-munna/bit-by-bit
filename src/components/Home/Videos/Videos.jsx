import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../../redux/features/videos/videosSlice';
import VideoCard from './VideoCard';

export default function Videos() {
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos(tags));
  }, [dispatch, tags]);

  let content;

  if (isLoading) {
    content = (
      <div className="w-full flex justify-center items-center py-20">
        <p className="text-lg font-medium text-gray-500 dark:text-gray-300">
          Loading videos...
        </p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full flex justify-center items-center py-20">
        <p className="text-lg font-medium text-red-500">
          Error: {error || 'Something went wrong!'}
        </p>
      </div>
    );
  } else if (videos.length === 0) {
    content = (
      <div className="w-full flex justify-center items-center py-20">
        <p className="text-lg font-medium text-gray-500 dark:text-gray-300">
          No videos available.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    );
  }

  return <div className="w-full px-8 py-10">{content}</div>;
}
