import React from 'react';

import { Card as BCard, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ title, imgUrl, quantity, price }) => {
  return (
    <BCard style={{ width: '18rem', margin: '10px' }}>
      <BCard.Img variant="top" src={imgUrl} />
      <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Title>{price}</BCard.Title>
        <BCard.Text>{quantity}</BCard.Text>
      </BCard.Body>
    </BCard>
  );
};

export default ProductCard;
