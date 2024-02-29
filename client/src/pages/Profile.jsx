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
    return <Text>User not authenticated</Text>;
  }

  const { me } = data || {};
  const { name, favorites } = me || {};

  return (
    <div>
      <Title level={2}>Profile</Title>
      <Title level={3}>{name}</Title>
      <Text>Favorites:</Text>
      <List
        dataSource={favorites}
        renderItem={(favorite) => (
          <List.Item key={favorite.id}>
            {favorite.songName} by {favorite.artistName}
          </List.Item>
        )}
      />
    </div>
  );
};

export default MyProfile;
