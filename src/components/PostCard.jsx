import Link from 'next/link';
import React from 'react';

const PostCard = ({ userId, id, title, body }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800 capitalize truncate">
                    {title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3">{body}</p>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div>
                    <span className="text-gray-500 text-xs">User ID: {userId}</span>
                    <span className="ml-4 text-gray-500 text-xs">Post ID: {id}</span>
                </div>
                <Link href={`/posts/${id}`} className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md shadow">View Details</Link>
            </div>
        </div>
    );
};

export default PostCard;