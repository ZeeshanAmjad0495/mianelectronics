import React, { useState } from 'react';
import useDispatch from 'react-redux';

import { Card as BCard, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { reduceItemQuantity } from '../../store/cartSlice';

const ProductCard = ({ title, imgUrl, quantity, price }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(1);
  const removeItem = () => {
    if (itemQuantity === 0) {
      return;
    }
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <BCard style={{ width: '18rem', margin: '10px' }}>
      <BCard.Img variant="top" src={imgUrl} />
      <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Title>{price}</BCard.Title>
        <BCard.Text>
          <button
            onClick={() => {
              removeItem();
              dispatch(reduceItemQuantity(itemQuantity));
            }}
          >
            -
          </button>
          <input type="text">{quantity}</input>
          <button
            onClick={() => {
              addItem();
              dispatch(reduceItemQuantity(itemQuantity));
            }}
          >
            +
          </button>
        </BCard.Text>
        <Button variant="primary">Proceed to Checkout</Button>
      </BCard.Body>
    </BCard>
  );
};

export default ProductCard;
