import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://reqres.in/api/users';

// initialState
const initialState = {
  data: [],
  user: null,
  loading: true,
};

export const getAllUsers = createAsyncThunk('getAllUsers', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const getSingleUser = createAsyncThunk('getSingleUser', (id) => {
  return fetch(`${url}/${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: {
    // get all users
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    [getAllUsers.rejected]: (state) => {
      state.loading = false;
    },

    // get single user
    [getSingleUser.pending]: (state) => {
      state.loading = true;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
    },
    [getSingleUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userSlice.reducer;
