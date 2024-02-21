
import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

const CustomCard = ({ artist, song, album }) => {
    const handleAddToFavorites = () => {};
 //add handler for adding to favorites
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt="album cover" src={album.coverUrl} />}
    >
      <Meta title={song} description={artist} />
      <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
    </Card>
  );
};

export default CustomCard;