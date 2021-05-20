import React from 'react';
import { Link } from 'react-router-dom';

import { Labels } from './ButtonLabels';

import './styles.scss';

const ButtonsGrid = () => {
  // const history = useHistory();

  return (
    <div id="wrapper-grid">
      {Labels.map(({ id, title, image, route }) => {
        return (
          <div key={id} className="container">
            <label className="opt-label">
              <h2 className="opt-title">{title}</h2>
              <Link to={route} type="button">
                {image}
              </Link>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonsGrid;
