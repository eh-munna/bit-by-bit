import { axiosPublic } from '../../../utils/axiosPublic';

export const getTransactions = async () => {
  const { data } = await axiosPublic.get('/transactions');
  return data;
};

export const createTransaction = async (transaction) => {
  const { data } = await axiosPublic.post('/transactions', transaction);
  return data;
};

export const updateTransaction = async (id, transaction) => {
  const { data } = await axiosPublic.put(`/transactions/${id}`, transaction);
  return data;
};

export const removeTransaction = async (id) => {
  const { data } = await axiosPublic.delete(`/transactions/${id}`);
  return data;
};
