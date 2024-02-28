import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@apollo/client';
import { Spin, Typography, List } from 'antd';
import { QUERY_USER } from '../utils/queries';

const MyProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const userId = user?.sub; // Assuming Auth0 sub is the user's ID

  // Fetch information using GraphQL query
  const { loading: queryLoading, error: queryError, data } = useQuery(QUERY_USER, {
    variables: { userId },
    skip: !userId, 
  });

  if (isLoading || queryLoading) {
    return <Spin size='large' />;
  }

  if (!isAuthenticated) {
    return <p>User not authenticated</p>;
  }

  const { me } = data || {};
  const { name, favorites } = me || {};

  return (
    <div>
      <h1>Profile</h1>
      <h2>{name}</h2>
      <p>Favorites:</p>
      <ul>
        {favorites &&
          favorites.map((favorite) => (
            <li key={favorite._id}>
              {favorite.songName} by {favorite.artistName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyProfile;
