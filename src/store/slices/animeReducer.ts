import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getAllAnimes } from "../thunks/animeThunk";

const animeSlice = createSlice({
  name: "anime",
  initialState: { data: [], error: null, loading: false },
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<any>) {
    builder.addCase(getAllAnimes.pending, (state: any) => {
      state.isLoading = true;
    });

    builder.addCase(getAllAnimes.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(getAllAnimes.rejected, (state: any, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const animeReducer = animeSlice.reducer;
