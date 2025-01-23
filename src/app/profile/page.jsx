import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async () => {

    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    if (!(await isAuthenticated())) {
        redirect('/api/auth/login')
    }

    return (
        <div>
            Welcome !
        </div>
    );
};

export default Profile;