import React from 'react';
import { useParams } from 'react-router';

import { PostIdParam } from '../../models/routes/RouteParams';

import { useGetPostsQuery } from './postsApi';

export const Post: React.FC = () => {
  const { postId } = useParams<PostIdParam>();

  const { post } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id.toString() === postId),
    }),
  });

  if (!post) {
    return <div>No post found!</div>;
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
  );
};
