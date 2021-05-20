import Logo from '../../assets/logo.svg';
import WhatsApp from '../../assets/whatsapp.svg';
import Facebook from '../../assets/facebook.svg';
import Marker from '../../assets/placeholder.svg';

const contactInfo = {
  phone: '+92-333-333-333-3',
  facebook: <img src={Facebook} alt="facebook" width="35em" />,
  whatsApp: <img src={WhatsApp} alt="whatsapp" width="35em" />,
};
const logo = <img src={Logo} alt="logo" width="50em" />;
const lat = 0;
const long = 0;
const address = { Marker, Coordinates: [lat, long] };

export const FooterItems = { contactInfo, logo, address };
