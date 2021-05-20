import React from 'react';
import {
  Navbar,
  Header,
  Footer,
  Sidebar,
  CardGrid,
  Pagination,
  Dropdown,
} from '../../../components';

import { allProducts as Products } from '../AllProducts/Products';

import './styles.scss';

const KitchenGasAppliances = Products.KitchenGasAppliances;
const numberOfItems = KitchenGasAppliances.length;
const productsPerPage = 12;

const KitchenAndGas = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="content__main">
        <Sidebar />
        <Dropdown label={'Items per page'} items={[12, 25, 100]} />
        <CardGrid
          data={KitchenGasAppliances}
          productsPerPage={productsPerPage}
        />
      </div>
      <Pagination numberOfPages={numberOfItems} recordsPerPage={50} />
      <Footer />
    </div>
  );
};

export default KitchenAndGas;
