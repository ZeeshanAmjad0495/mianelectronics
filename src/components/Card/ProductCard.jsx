import React from 'react';
import { useDispatch } from 'react-redux';

import { Card as BCard, Button } from 'react-bootstrap';

import { addItemsToCart } from '../../store/cartSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = props => {
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log('event triggered');
    dispatch(addItemsToCart(props));
  };

  const { title, imgUrl, descp, price } = props;

  return (
    <BCard style={{ width: '18rem', margin: '10px' }}>
      <BCard.Img variant="top" src={imgUrl} />
      <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Title>{price}</BCard.Title>
        <BCard.Text>{descp}</BCard.Text>
        <Button variant="primary" onClick={addToCart}>
          Buy
        </Button>
      </BCard.Body>
    </BCard>
  );
};

export default ProductCard;
