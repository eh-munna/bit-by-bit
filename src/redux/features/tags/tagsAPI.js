import { axiosPublic } from '../../../utils/axiosPublic';

export const getTags = async () => {
  const response = await axiosPublic.get('/tags');
  return response?.data;
};
