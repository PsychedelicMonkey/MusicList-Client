import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import api from '../../lib/api';

type Album = {
  id: number;
  thumb: string;
  title: string;
};

interface SearchState {
  results: Array<Album>;
}

const initialState: SearchState = {
  results: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(searchAlbums.fulfilled, (state, action) => {
      state.results = action.payload.results;
    });
  },
});

export const searchAlbums = createAsyncThunk(
  'search/albums',
  async (query: string) => {
    const res = await api.post('/search/albums', JSON.stringify({ query }));
    return res.data;
  }
);

export const selectResults = (state: RootState) => state.search.results;

export default searchSlice.reducer;
