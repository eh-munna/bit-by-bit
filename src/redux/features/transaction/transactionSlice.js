import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createTransaction,
  getTransactions,
  removeTransaction,
  updateTransaction,
} from './transactionAPI';

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const data = await getTransactions();
    return data;
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction) => {
    const data = await createTransaction(transaction);
    return data;
  }
);

export const editTransaction = createAsyncThunk(
  'transaction/editTransaction',
  async ({ id, transaction }) => {
    const data = await updateTransaction(id, transaction);
    return data;
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/removeTransaction',
  async (id) => {
    const data = await removeTransaction(id);
    return data;
  }
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.transactions = [];
      })
      .addCase(addTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(editTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        );
      })
      .addCase(editTransaction.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        );
      })
      .addCase(deleteTransaction.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default transactionSlice.reducer;
