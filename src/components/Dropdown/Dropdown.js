import React from 'react';
import BDropdown from 'react-bootstrap/Dropdown';

const Dropdown = ({ label, items }) => {
  return (
    <div>
      <BDropdown>
        <BDropdown.Toggle variant="primary" id="dropdown-basic">
          {label}
        </BDropdown.Toggle>

        <BDropdown.Menu>
          {items.map(item => {
            return <BDropdown.Item href="#/action">{item}</BDropdown.Item>;
          })}
        </BDropdown.Menu>
      </BDropdown>
    </div>
  );
};

export default Dropdown;
