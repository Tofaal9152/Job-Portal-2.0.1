import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  loading: any;
}

const initialState: CounterState = {
  loading: false,
};

export const counterSlice = createSlice({
  name: "All redux state here",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = counterSlice.actions;
export const selectLoading = (state: RootState) => state.AllSlice.loading; 
export default counterSlice.reducer;
