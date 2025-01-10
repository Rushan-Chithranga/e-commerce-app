import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initiaLState: boolean = false;

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState: initiaLState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});


export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;