import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Login } from '../features/auth/Login';
import { Post } from '../features/posts/Post';
import { Posts } from '../features/posts/Posts';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AuthRoutes } from '../models/routes/AuthRoutes';
import { PostRoutes } from '../models/routes/PostRoutes';

export const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={PostRoutes.base.template} />
      <Route
        exact
        path={AuthRoutes.login.template}
        render={() => (
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        )}
      />
      <Route
        exact
        path={PostRoutes.base.template}
        render={() => (
          <DefaultLayout>
            <Posts />
          </DefaultLayout>
        )}
      />
      <Route
        exact
        path={PostRoutes.edit.template}
        render={() => (
          <DefaultLayout>
            <Post />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};
