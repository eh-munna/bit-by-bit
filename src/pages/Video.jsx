import { SquarePen, Trash } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import RelatedVideos from '../components/Home/Videos/RelatedVideos';
import {
  useDeleteVideoMutation,
  useGetVideoQuery,
} from '../redux/features/api/apiSlice';

export default function Video() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError, error } = useGetVideoQuery(videoId);
  const [deleteVideo, { isSuccess, isLoading: isDeleting }] =
    useDeleteVideoMutation();

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this video?'
    );
    if (confirmed && videoId) {
      deleteVideo(id);
    }
    return;
  };
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Loading video...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-500 text-lg">
          Error: {error || 'Something went wrong!'}
        </p>
      </div>
    );
  }

  if (!video || !video.id) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500 text-lg">Video not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {video.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300">
            {video.description}
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>
              By <span className="font-medium">{video.author}</span>
            </span>
            <span>• {video.date}</span>
            <span>• Duration: {video.duration}</span>
            <span>• {video.views.toLocaleString()} views</span>
          </div>

          <div className="flex gap-6 mt-4">
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm11-2a1 1 0 00-1.707-.707L9 10.586 7.707 9.293A1 1 0 106.293 10.707l2 2a1 1 0 001.414 0l4-4A1 1 0 0013 8z" />
              </svg>
              <span>{video.likes}</span>
            </div>
            <div className="flex items-center gap-1 text-red-600 dark:text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 1116 0A8 8 0 012 10zm9-4a1 1 0 10-2 0v4a1 1 0 102 0V6zm-1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>{video.unlikes}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <Link
                to={`/videos/edit-video/${video.id}`}
                className="flex items-center gap-2 text-sm text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
              >
                <SquarePen size={18} />
                <span>Edit</span>
              </Link>

              <button
                disabled={isDeleting}
                onClick={() => handleDelete(video.id)}
                className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <Trash size={18} />
                <span>Delete</span>
              </button>
            </div>

            <Link
              to={video.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>

      <RelatedVideos id={video.id} tags={video.tags} />
    </div>
  );
}
