import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { api, config } from '../helpers/api';
/* eslint-disable @typescript-eslint/no-explicit-any */

const initialState = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  login_error: null,
  signup_error: null,
  update_error: null,
  get_error: null,
  status: 'idle',
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    let userId;
    if (token !== null) {
      const decoded = jwtDecode(token);
      userId = decoded.sub;
      return userId;
    }
  } catch (error) {
    console.log(error);
  }
};

export const createUser = createAsyncThunk(
  'user/createuser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post('/users', { user });
      if (response.data.token) {
        AsyncStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.push('/dashboard');
        }, 1000);
        return response.data;
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await api.get(`/users/${userId}`, config);
    return response.data;
  },
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth', { user });
      if (response.data.token) {
        AsyncStorage.setItem('token', response.data.token);
        setTimeout(() => {
          history.replace('/dashboard');
        }, 1000);
        return response.data;
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user) => {
    let data = await getToken()
    const response = await api.put(`/users/${data}`, config, {user});
    return response.data;
  },
);

/* eslint-disable no-param-reassign */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // user signup
    builder.addCase(createUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.status = 'failed';
      state.signup_error = action.payload;
    });

    // user login
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.login_error = action.payload;
    });

    // fetch user
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'failed';
      state.get_error = action.payload;
    });

    // update user
    builder.addCase(updateUser.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.status = 'failed';
      state.update_error = action.payload;
    });
  },
});

export default userSlice.reducer;
