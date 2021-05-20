import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Footer, CartContainer } from '../../components';

const CartPageLayout = () => {
  return (
    <div>
      <Navbar />
      <CartContainer>
        <Button variant="primary">Proceed to Checkout</Button>
      </CartContainer>
      <Footer />
    </div>
  );
};

export default CartPageLayout;
