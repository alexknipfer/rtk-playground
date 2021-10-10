import { PostIdParam, RouteParams } from './RouteParams';

const base = '/posts';

export const PostRoutes = {
  base: {
    template: base,
    make: () => '/posts',
  },
  edit: {
    template: `${base}/${RouteParams.postId}`,
    make: ({ postId }: PostIdParam) => `${PostRoutes.base.make()}/${postId}`,
  },
};
