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

const WASHERS_AND_DRYERS = Products.WashersDryers;
const numberOfItems = WASHERS_AND_DRYERS.length;
const productsPerPage = 12;

const WashersAndDryers = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="content__main">
        <Sidebar />
        <Dropdown label={'Items per page'} items={[12, 25, 100]} />
        <CardGrid data={WASHERS_AND_DRYERS} productsPerPage={productsPerPage} />
      </div>
      <Pagination numberOfPages={numberOfItems} recordsPerPage={50} />
      <Footer />
    </div>
  );
};

export default WashersAndDryers;
