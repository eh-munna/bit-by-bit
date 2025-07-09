import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchRelatedVideos } from '../../../redux/features/relatedVideos/relatedVideosSlice';

export default function RelatedVideos({ id, tags }) {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchRelatedVideos({ id, tags }));
    }
  }, [dispatch, id, tags]);

  let content;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          Loading related videos...
        </p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex justify-center items-center py-10">
        <p className="text-red-500 text-lg">
          Error: {error || 'Something went wrong!'}
        </p>
      </div>
    );
  } else if (!relatedVideos || relatedVideos.length === 0) {
    content = (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-500 dark:text-gray-300 text-lg">
          No related videos found.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {relatedVideos.map((video) => (
          <Link
            to={`/videos/${video.id}`}
            key={video.id}
            className="block group"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {video.author}
            </p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Related Videos
      </h2>
      {content}
    </div>
  );
}
