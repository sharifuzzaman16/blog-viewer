import Link from 'next/link';
import React from 'react';

const PostCard = ({ userId, id, title, body }) => {
    return (
        <div className="max-w-sm mx-auto shadow-md rounded-lg overflow-hidden border border-[#333]">
            <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-white capitalize truncate">
                    {title}
                </h2>
                <p className="mt-2 text-gray-300 text-sm line-clamp-3">{body}</p>
            </div>
            <div className="px-6 py-4 bg-[#0b0b0b] flex items-center justify-between">
                <div>
                    <span className="text-gray-200 text-xs">User ID: {userId}</span>
                    <span className="ml-4 text-gray-200 text-xs">Post ID: {id}</span>
                </div>
                <Link href={`/posts/${id}`} className="text-sm text-white border border-[#333] px-3 py-1 rounded-md shadow">View Details</Link>
            </div>
        </div>
    );
};

export default PostCard;