import React, { useState } from 'react';
import ProductCard from '../Card/ProductCard';

import './styles.scss';

const CardGrid = ({ data, productsPerPage }) => {
  const [cards] = useState(data.slice(0, productsPerPage));
  return (
    <div className="wrapper-flex">
      {cards.map(
        ({
          SerialNumber,
          Name,
          Description,
          QuantityInStock,
          Price,
          ImageUrl,
          Discount,
          Variant,
          Brand,
        }) => {
          return (
            <ProductCard
              key={Date.now()}
              productId={SerialNumber}
              imgUrl={ImageUrl}
              descp={Description}
              price={Price}
            />
          );
        }
      )}
    </div>
  );
};

export default CardGrid;
