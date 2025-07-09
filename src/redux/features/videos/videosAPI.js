import { axiosPublic } from '../../../utils/axiosPublic';

export const getVideos = async (tags) => {
  const queryString = tags?.map((tag) => `tags_like=${tag}`).join('&');
  const response = await axiosPublic.get(`/videos?${queryString}`);
  return response?.data;
};
