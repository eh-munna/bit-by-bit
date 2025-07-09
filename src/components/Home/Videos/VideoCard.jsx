import { Link } from 'react-router';

export default function VideoCard({ video }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-200 rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />

        <div className="flex flex-col justify-between flex-1 p-4">
          <div>
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {video.author} • {video.date}
            </p>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {video.description}
            </p>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span>{video.views.toLocaleString()} views</span>
            <div className="flex space-x-2">
              <span>👍 {video.likes}</span>
              <span>👎 {video.unlikes}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full">
          <Link
            to={`/videos/${video?.id}`}
            className="my-2.5 mx-1.5 block bg-blue-600 text-white cursor-pointer font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 px-2 py-2 text-center"
          >
            Watch
          </Link>
        </div>
      </div>
    </>
  );
}
