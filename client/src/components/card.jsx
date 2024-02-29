import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CustomCard = ({ result, onCardClick }) => {
  const handleCardClick = () => {
    // Pass the relevant information to the parent component
    onCardClick(result);
  };

  return (
    <Card
      hoverable
      style={{ width: 300, marginBottom: 16 }}
      onClick={handleCardClick}
    >
      <Meta title={result.name} />
    </Card>
  );
};

export default CustomCard;
