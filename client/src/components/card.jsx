import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = ({ result, onCardClick }) => {
  const handleClick = () => {
    // Call the onCardClick function passed as a prop
    onCardClick(result.name);
  };

  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 16 }}
      onClick={handleClick}
    >
      <Meta title={result.name} description={`Click to see Top Tracks!: ${result.name}`} />
    </Card>
  );
};

export default CustomCard;
