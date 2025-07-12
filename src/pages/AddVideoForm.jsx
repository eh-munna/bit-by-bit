import { useState } from 'react';
import { useAddVideoMutation } from '../redux/features/api/apiSlice';
import { axiosPublic } from '../utils/axiosPublic';

export default function AddVideoForm() {
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const initialVideo = {
    title: '',
    description: '',
    date: '',
    author: '',
    duration: '',
    views: 0,
    link: '',
    thumbnail: '',
    likes: 0,
    unlikes: 0,
    tags: '',
  };
  const [video, setVideo] = useState(initialVideo);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVideo((prev) => ({
      ...prev,
      [name]:
        name === 'views' || name === 'likes' || name === 'unlikes'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newVideo = {
      ...video,
      id: crypto.randomUUID(),
      tags: video.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ''),
    };

    console.log('New video object:', newVideo);

    // Here, you’d dispatch a Redux action or make an API call
    addVideo(newVideo);

    // Reset form
    setVideo(initialVideo);
    const response = await axiosPublic.post('/videos', newVideo);
    return response?.data;

    // dispatch(createVideo(newVideo));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Add New Video
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={video.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={video.description}
          onChange={handleChange}
          placeholder="Description"
          rows={3}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="date"
          value={video.date}
          onChange={handleChange}
          placeholder="Date (e.g. May 10, 2024)"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={video.author}
          onChange={handleChange}
          placeholder="Author"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="duration"
          value={video.duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 9:12)"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="views"
          value={video.views}
          onChange={handleChange}
          placeholder="Views"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="link"
          value={video.link}
          onChange={handleChange}
          placeholder="Video Link"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="thumbnail"
          value={video.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="likes"
          value={video.likes}
          onChange={handleChange}
          placeholder="Likes"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="unlikes"
          value={video.unlikes}
          onChange={handleChange}
          placeholder="Unlikes"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="tags"
          value={video.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          className="border p-2 rounded"
          required
        />

        <button
          disabled={isLoading}
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Add Video
        </button>
      </form>
    </div>
  );
}
