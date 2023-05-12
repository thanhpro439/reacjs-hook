import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
  pages: PropTypes.object,
};

PostList.defaultProps = {
  posts: [],
  pages: {},
};

function PostList(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
