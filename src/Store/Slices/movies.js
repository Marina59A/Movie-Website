import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosInstance/instance";

export const moviesAction = createAsyncThunk("movies/getAll", async () => {
  const response = await instance.get("/movie/popular?");
  return response.data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: []
  },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      console.log(action.payload);

      state.movies = action.payload;
    });
  }
});

export default moviesSlice.reducer;