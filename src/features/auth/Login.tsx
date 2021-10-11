import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { PostRoutes } from '../../models/routes/PostRoutes';

import { setCredentials } from './authSlice';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button
        onClick={() => {
          dispatch(setCredentials({ user: username }));
          push(PostRoutes.base.make());
        }}
      >
        Login
      </button>
    </div>
  );
};
