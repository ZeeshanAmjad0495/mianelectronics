import AirConditioner from '../../assets/air-conditioner.svg';
import Refrigerator from '../../assets/refrigerator.svg';
import WashersAndDryers from '../../assets/laundry.svg';
import SmallAppliances from '../../assets/juicer.svg';
import WaterCooler from '../../assets/fridge.svg';
import RoomAirCooler from '../../assets/fan.svg';
import KitchenAndGas from '../../assets/gas-stove.svg';
import TV from '../../assets/tv-monitor.svg';
import DeepFreezer from '../../assets/freezer.svg';

export const Labels = [
  {
    id: 1,
    title: 'Air Conditoners',
    type: 'air-conditioner',
    image: (
      <img
        src={AirConditioner}
        alt="AC"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/air-conditioner',
  },
  {
    id: 2,
    title: 'Refrigerators',
    type: 'refrigerators',
    image: (
      <img
        src={Refrigerator}
        alt="Refrigerator"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/refrigerators',
  },
  {
    id: 3,
    title: 'Washers & Dryers',
    type: 'washers-dryers',
    image: (
      <img
        src={WashersAndDryers}
        alt="Washers and Dryers"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/washers-and-dryers',
  },
  {
    id: 4,
    title: 'Small Appliances',
    type: 'small-appliances',
    image: (
      <img
        src={SmallAppliances}
        alt="Small Appliances"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/small-appliances',
  },
  {
    id: 5,
    title: 'Water Coolers',
    type: 'water-coolers',
    image: (
      <img
        src={WaterCooler}
        alt="Water Coolers"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/water-coolers',
  },
  {
    id: 6,
    title: 'Room Air Coolers',
    type: 'air-coolers',
    image: (
      <img
        src={RoomAirCooler}
        alt="Air Coolers"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/air-coolers',
  },
  {
    id: 7,
    title: 'Kitchen & Gas Appliances',
    type: 'kitchen-gas',
    image: (
      <img
        src={KitchenAndGas}
        alt="Kitchen and Gas"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/kitchen-and-gas',
  },
  {
    id: 8,
    title: 'TVs',
    type: 'tvs',
    image: <img src={TV} alt="TV" width="100em" className="category__image" />,
    route: '/products/tvs',
  },
  {
    id: 9,
    title: 'Deep Freezers',
    type: 'deep-freezers',
    image: (
      <img
        src={DeepFreezer}
        alt="Deep Freezers"
        width="100em"
        className="category__image"
      />
    ),
    route: '/products/deep-freezers',
  },
];
