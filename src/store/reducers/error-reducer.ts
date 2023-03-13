import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Error = {
  text: string;
  description: string;
  active: boolean;
};

const initialError: Error = {
  text: '',
  description: '',
  active: false,
};

type ErrorState = {
  error: Error;
};

const initialState: ErrorState = { error: initialError };

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    removeError: (state) => {
      state.error = initialError;
    },
  },
});

export const { setError, removeError } = errorSlice.actions;
export const selectError = (state: RootState) => state.error;

export default errorSlice.reducer;
