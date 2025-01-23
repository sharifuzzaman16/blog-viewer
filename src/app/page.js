import PostCard from '@/components/PostCard';
import React from 'react';

const Home = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();


  return (
    <>
      <div className='w-1/2 md:w-1/4 mt-10 mx-auto border-b border-[#333] p-4'>
        <h1 className='text-3xl font-bold text-center'>Blog Posts</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
        {
          posts.map((post) => <PostCard key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}></PostCard>)
        }
      </div>
    </>
  );
};

export default Home;