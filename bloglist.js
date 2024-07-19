
import React from 'react';

const BlogList = ({ posts, onButtonClick }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          
          <button onClick={() => onButtonClick(post.id)}>Update your blog</button>
         
          <button onClick={() => onButtonClick(post.id)}>Delete your blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
