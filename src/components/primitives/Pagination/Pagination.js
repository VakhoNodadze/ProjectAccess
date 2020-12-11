import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { generatePageRange } from '../../utils/pagination';

import { StyledContainer } from './styled';

const Pagination = ({ size, params, onChange }) => {
  if (!size || !params.limit) {return null;}
  const paginate = generatePageRange(params.page, size, params.limit) || [];

  return (
    <StyledContainer hidden={!paginate.length}>
      {paginate.map((item, i) => (
        <React.Fragment key={`li-${i}`}>
          {typeof item === 'number' ? (
            <li 
              className={item === params.page ? 'item active' : 'item'} 
              onClick={() => onChange({ ...params, page: item })} role="button" tabIndex={0} style={{ outline: 'none' }}>
              {item}
            </li>
          ) : (
            <li style={{ pointerEvents: 'none' }}>{item}</li>
          )}
        </React.Fragment>
      ))}
    </StyledContainer>
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func
};

Pagination.defaultProps = {
  onChange: () => {}
};

export default memo(Pagination);
