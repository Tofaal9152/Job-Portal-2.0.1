import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  authUser: any;
}

const initialState: CounterState = {
  authUser: null,
};

export const counterSlice = createSlice({
  name: "All redux state here",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const { setAuthUser } = counterSlice.actions;
export const selectAuthUser = (state: RootState) => state.AllSlice.authUser; 
export default counterSlice.reducer;
