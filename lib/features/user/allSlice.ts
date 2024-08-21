import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  authUser: any;
  getalljobs: any;
  getjobbyid: any;
}

const initialState: CounterState = {
  authUser: null,
  getalljobs: null,
  getjobbyid: null,
};

export const counterSlice = createSlice({
  name: "All redux state here",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setGetAllJobs: (state, action) => {
      state.getalljobs = action.payload;
    },
    setGetJobById: (state, action) => {
      state.getjobbyid = action.payload;
    },
  },
});

export const { setAuthUser, setGetAllJobs, setGetJobById } = counterSlice.actions;

export const selectAuthUser = (state: RootState) => state.AllSlice.authUser; 
export const selectGetAllJobs = (state: RootState) => state.AllSlice.getalljobs; 
export const selectGetJobById = (state: RootState) => state.AllSlice.getjobbyid; 

export default counterSlice.reducer;
