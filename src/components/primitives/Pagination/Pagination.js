import React from 'react';
import _ from 'lodash';

import { PrevNext, Page } from './styled';

const Pagination = ({pageSize, itemsCount, onPageChange, currentPage, onPrevPage, onNextPage}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {return null;}
  const pages = _.range(1, pageCount + 1);

  return <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
    <ul style={{listStyleType: 'none', display: 'flex'}}>
      <PrevNext onClick={() => onPrevPage()}>Previous</PrevNext>
      {pages.map((page) =>
        <Page key={page} onClick={() => onPageChange(page)} active={page === currentPage}>
          {page}
        </Page>)
      }
      <PrevNext onClick={() => onNextPage()}>Next</PrevNext>
    </ul>
  </nav>;
};

export default Pagination;