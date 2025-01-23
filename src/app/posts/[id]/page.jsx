import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();


    return (
        <div className="flex flex-col items-center py-10 px-4">
            <div className='w-1/4 my-10 mx-auto border-b border-[#333] p-4'>
                <h1 className='text-3xl font-bold text-center'>Post Details</h1>
            </div>
            <div className="max-w-3xl w-full border border-[#333] shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-gray-300 leading-relaxed mb-6">{post.body}</p>
                <div className="flex justify-between items-center text-gray-200">
                    <span className="text-sm">Post ID: {post.id}</span>
                    <span className="text-sm">User ID: {post.userId}</span>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;