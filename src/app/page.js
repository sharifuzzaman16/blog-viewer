import React from 'react';

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  console.log(posts)

  return (
    <div>
      
    </div>
  );
};

export default Home;