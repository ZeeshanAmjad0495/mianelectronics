import React from 'react';
import {
  ProductNavbar,
  Footer,
  Sidebar,
  CardGrid,
  Pagination,
  Dropdown,
  BottomNav,
} from '../../../components';

import { allProducts as Products } from '../AllProducts/Products';

import './styles.scss';

const AIR_CONDITIONERS = Products.AirConditioners;
const numberOfItems = AIR_CONDITIONERS.length;
const productsPerPage = 12;

const AirConditioners = () => {
  return (
    <>
      <ProductNavbar />
      <CardGrid data={AIR_CONDITIONERS} productsPerPage={productsPerPage} />
      <BottomNav />
      <Footer />
    </>
  );
};

export default AirConditioners;
