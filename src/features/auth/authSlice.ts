import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface AuthState {
  user: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }: PayloadAction<{ user: string }>) => {
      state.user = payload.user;
      state.accessToken = 'fakeAccessToken';
    },
  },
});

export const { setCredentials } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
