import React from 'react';
import { Navbar, Header, ButtonsGrid, Footer } from '../../components';

import './styles.scss';

const HomepageLayout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ButtonsGrid />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
