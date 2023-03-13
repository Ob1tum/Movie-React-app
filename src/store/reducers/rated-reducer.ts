import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { RatedMovie } from '../../types/rate-movies';
type RatedState = {
  ratedMovies: {
    [key: string]: RatedMovie;
  };
  ratedMoviesMap: number[];
};

const initialState: RatedState = {
  ratedMovies: {},
  ratedMoviesMap: [],
};

export const ratedSlice = createSlice({
  name: 'rated',
  initialState,
  reducers: {
    addRate: (state, action: PayloadAction<RatedMovie>) => {
      const { id } = action.payload;
      const rateIsSetted = state.ratedMoviesMap.includes(id);

      if (!rateIsSetted) {
        state.ratedMoviesMap = [id, ...state.ratedMoviesMap];
      }
      state.ratedMovies = {
        ...state.ratedMovies,
        [id]: action.payload,
      };
    },
    removeRate: (state, action: PayloadAction<number>) => {
      state.ratedMoviesMap = state.ratedMoviesMap.filter((id) => id !== action.payload);
      delete state.ratedMovies[action.payload];
    },
  },
});

export const { addRate, removeRate } = ratedSlice.actions;

export const selectRated = (state: RootState) => state.rated.ratedMovies;
export const selectRatedMap = (state: RootState) => state.rated.ratedMoviesMap;

export default ratedSlice.reducer;
