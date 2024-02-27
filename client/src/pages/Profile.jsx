import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



const Profile = () => {
    const { user } = useAuth0();
    console.log(user);
    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.name}</h2>
            
        </div>
    )

}

export default Profile;
