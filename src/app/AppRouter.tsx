import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Post } from '../features/posts/Post';
import { Posts } from '../features/posts/Posts';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { PostRoutes } from '../models/routes/PostRoutes';

export const AppRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to={PostRoutes.base.template} />
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
