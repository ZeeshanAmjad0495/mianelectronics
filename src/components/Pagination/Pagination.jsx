import React, { useEffect } from 'react';
import BPagination from 'react-bootstrap/Pagination';

const items = [];
const active = 1;
for (let number = 0; number <= 10; number++) {
  items.push(
    <BPagination.Item key={number} active={number === active}>
      {number}
    </BPagination.Item>
  );
}

const Pagination = ({ numberOfPages, recordsPerPage }) => {
  return (
    <BPagination>
      <BPagination.First />
      <BPagination.Prev />
      {items}
      <BPagination.Next />
      <BPagination.Last />
    </BPagination>
  );
};

export default Pagination;
