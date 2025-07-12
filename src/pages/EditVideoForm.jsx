import { useState } from 'react';
import { useParams } from 'react-router';
import {
  useGetVideoQuery,
  useUpdateVideoMutation,
} from '../redux/features/api/apiSlice';

export default function EditVideoForm() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError, error } = useGetVideoQuery(videoId);
  const [updateVideo, { isLoading: isEditing }] = useUpdateVideoMutation();
  const [editVideo, setEditVideo] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditVideo((prev) => ({
      ...prev,
      [name]:
        name === 'views' || name === 'likes' || name === 'unlikes'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedVideo = {
      ...editVideo,
      tags:
        typeof editVideo?.tags === 'string'
          ? editVideo.tags
              .split(',')
              .map((tag) => tag.trim())
              .filter((tag) => tag !== '')
          : [],
    };

    console.log('New video object:', updatedVideo);

    // Here, make an API call
    updateVideo({ id: video?.id, data: updatedVideo });

    // Reset form
    setEditVideo({
      ...updatedVideo,
      tags: updatedVideo.tags.join(', '),
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  if (!editVideo && video) {
    setEditVideo(video);
    return null;
  }

  const {
    title,
    description,
    link,
    thumbnail,
    date,
    author,
    duration,
    views,
    likes,
    unlikes,
    tags,
  } = editVideo;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New Video
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          rows={3}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="date"
          value={date}
          onChange={handleChange}
          placeholder="Date (e.g. May 10, 2024)"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
          placeholder="Author"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 9:12)"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="views"
          value={views}
          onChange={handleChange}
          placeholder="Views"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="link"
          value={link}
          onChange={handleChange}
          placeholder="Video Link"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="thumbnail"
          value={thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="likes"
          value={likes}
          onChange={handleChange}
          placeholder="Likes"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="unlikes"
          value={unlikes}
          onChange={handleChange}
          placeholder="Unlikes"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="tags"
          value={Array.isArray(tags) ? tags.join(', ') : tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          className="border p-2 rounded"
          required
        />

        <button
          disabled={isEditing}
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Update Video
        </button>
      </form>
    </div>
  );
}
