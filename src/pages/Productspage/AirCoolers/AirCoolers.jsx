import React from 'react';
import {
  Navbar,
  Header,
  Footer,
  BottomNav,
  CardGrid,
  ProductNavbar,
} from '../../../components';

import { allProducts as Products } from '../AllProducts/Products';

import './styles.scss';

const RoomAirCoolers = Products.RoomAirCoolers;
const numberOfItems = RoomAirCoolers.length;
const productsPerPage = 12;

const AirCoolers = () => {
  return (
    <div>
      <ProductNavbar />
      <CardGrid data={RoomAirCoolers} productsPerPage={productsPerPage} />{' '}
      <BottomNav />
      <Footer />
    </div>
  );
};

export default AirCoolers;
