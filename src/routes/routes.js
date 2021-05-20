import {
  Homepage,
  Cartpage,
  ProductAC,
  ProductACool,
  ProductRefrig,
  ProductWashers,
  ProductWaterCooler,
  ProductTV,
  ProductKitchen,
  ProductSmallApp,
} from '../pages';
import { Filters } from '../components';

export const defaultRedirect = '/homepage';

export const routes = [
  {
    path: '/homepage',
    component: Homepage,
  },
  {
    path: '/cart',
    component: Cartpage,
  },
  {
    path: '/products',
  },
  {
    path: '/filters',
    component: Filters,
  },
  {
    path: '/products/air-conditioner',
    component: ProductAC,
  },
  {
    path: '/products/air-coolers',
    component: ProductACool,
  },
  {
    path: '/products/refrigerators',
    component: ProductRefrig,
  },
  {
    path: '/products/washers-and-dryers',
    component: ProductWashers,
  },
  {
    path: '/products/tvs',
    component: ProductTV,
  },
  {
    path: '/products/kitchen-and-gas',
    component: ProductKitchen,
  },
  {
    path: '/products/small-appliances',
    component: ProductSmallApp,
  },
  {
    path: '/products/water-coolers',
    component: ProductWaterCooler,
  },

  {
    path: '/products/deep-freezers',
  },
];
