import React from 'react';
import { Link } from 'react-router-dom';

import { PostRoutes } from '../../models/routes/PostRoutes';

import { useAddPostMutation, useGetPostsQuery } from './postsApi';

export const Posts: React.FC = () => {
  const { data = [], isLoading } = useGetPostsQuery();
  const [addPost, { isLoading: isAddingPost }] = useAddPostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAddingPost) {
    return <div>Adding post...</div>;
  }

  if (!data.length) {
    return <div>No Posts!</div>;
  }

  return (
    <section>
      <h1>Posts</h1>
      <button onClick={() => addPost({ title: 'foo', body: 'bar', userId: 1 })}>
        Add Post
      </button>
      {data.map((post) => (
        <ul key={post.id}>
          <li>
            <Link to={PostRoutes.edit.make({ postId: post.id.toString() })}>
              {post.title}
            </Link>
          </li>
        </ul>
      ))}
    </section>
  );
};
