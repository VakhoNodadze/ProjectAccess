
import React from 'react';

export const Key = ({color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{marginBottom: '2px'}}>
    <g class="a">
      <path class="b" d="M0,0H24V24H0Z" style={{fill: 'none'}} />
      <path d="M12.65,10a6,6,0,1,0,0,4H17v4h4V14h2V10ZM7,14a2,2,0,1,1,2-2A2.006,2.006,0,0,1,7,14Z" style={{fill: color}} />
    </g>
  </svg>
);

export default Key;
