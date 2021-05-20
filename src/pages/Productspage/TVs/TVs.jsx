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

const TVS = Products.Tvs;
const numberOfItems = TVS.length;
const productsPerPage = 12;

const Tvs = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="content__main">
        <Sidebar />
        <Dropdown label={'Items per page'} items={[12, 25, 100]} />
        <CardGrid data={TVS} productsPerPage={productsPerPage} />
      </div>
      <Pagination numberOfPages={numberOfItems} recordsPerPage={50} />
      <Footer />
    </div>
  );
};

export default Tvs;
