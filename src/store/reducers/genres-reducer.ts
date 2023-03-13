import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GenreObject } from '../../types/genres';
import { getGenres } from '../../movie-api/genres';

export type GenresState = {
  genres: GenreObject[];
};

const initialState: GenresState = {
  genres: [],
};

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  return getGenres();
});

export const genresSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action: PayloadAction<GenresState>) => {
      state.genres = action.payload.genres;
    });
  },
});

// export const { setMovies, changePage } = movieSlice.actions;

export const selectGenres = (state: RootState) => state.genres.genres;

export default genresSlice.reducer;
