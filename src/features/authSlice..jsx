import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authResponse: {},
  token:"",
  user:{},
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStartAuth: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFailAuth: (state) => {
      state.loading = false;
      state.error = true;
    },
    succcessLoginAuth: (state, { payload }) => {
      state.loading = false;
      state.auth = payload;
      state.token = payload?.token;
      state.user = payload?.user;
    },
    succcessRegisterAuth: (state, { payload }) => {
      state.loading = false;
      state.authResponse = payload;
      state.token = payload?.token;
      state.user = payload?.data;
    },
    logoutSuccess:state=> {
        state.loading = false;
        state.auth = {};
        state.token = "";
        state.user = {};
    }
  },
});

export const { fetchStartAuth,fetchFailAuth,succcessLoginAuth,succcessRegisterAuth,logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
