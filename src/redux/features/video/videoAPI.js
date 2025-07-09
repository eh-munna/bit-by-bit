import { axiosPublic } from '../../../utils/axiosPublic';
export const getVideo = async (id) => {
  const response = await axiosPublic.get(`/videos/${id}`);
  return response?.data;
};
