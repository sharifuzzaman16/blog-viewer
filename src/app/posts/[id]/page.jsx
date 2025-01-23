import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;
    // Sample post data
    const post = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    return (
        <div className="flex justify-center items-center py-10 px-4">
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