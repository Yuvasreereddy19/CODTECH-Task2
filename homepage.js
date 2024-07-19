// src/pages/HomePage.js
import React, { useState } from 'react';
import BlogList from '../components/BlogList';

const HomePage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'hello A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function, but over time, shoes also became fashion items..', },
    { id: 2, title: 'Second Post', content: 'Serious Eats is a famous and world-renowned food blog and online community focusing on in-depth food knowledge, healthy recipes, cooking techniques, and culinary experimentation..' },
  ]);

  const handleButtonClick = (id) => {
    console.log(`Button clicked for post with id: ${id}`);
  };

  return (
    <main>
      <BlogList posts={posts} onButtonClick={handleButtonClick} />
    </main>
  );
};

export default HomePage;
