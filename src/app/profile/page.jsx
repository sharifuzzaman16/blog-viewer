import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async () => {

    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");
    const generateRandomColor = () => {
        const colors = [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const backgroundColor = generateRandomColor();

    if (!(await isAuthenticated())) {
        redirect('/api/auth/login')
    }

    return (
        <div className="flex flex-col items-center">
            <div className='w-1/4 my-10 mx-auto border-b border-[#333] p-4'>
                <h1 className='text-3xl font-bold text-center'>Profile</h1>
            </div>
            <div className="border border-[#333] p-8 rounded-lg shadow-lg max-w-xl w-full">

                <div className="text-center">
                    {user?.picture ? (
                        <img
                            src={user.picture}
                            alt="Profile Picture"
                            className="w-24 h-24 rounded-full mx-auto border-2 border-[#333]"
                        />
                    ) : (
                        <div
                            className={`w-24 h-24 rounded-full border-2 border-[#333] mx-auto flex items-center justify-center text-white font-bold text-5xl ${backgroundColor}`}
                        >
                            {getInitial(user?.given_name)}
                        </div>
                    )}
                    <h1 className="text-2xl font-semibold mt-4">
                        Welcome, {user?.given_name || "Guest"}!
                    </h1>
                    <p className="text-gray-300">{user?.email || "No email provided"}</p>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        This is your profile page. Manage your account and preferences here.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Profile;