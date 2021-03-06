
import React from 'react';
import { withTheme } from 'styled-components';

export const Face = ({theme}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: theme.color.text}}>
    <path d="M9,11.75A1.25,1.25,0,1,0,10.25,13,1.25,1.25,0,0,0,9,11.75Zm6,0A1.25,
    1.25,0,1,0,16.25,13,1.25,1.25,0,0,0,15,11.75ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,
    18a8.011,8.011,0,0,1-8-8,8.108,8.108,0,0,1,.05-.86A10.062,10.062,0,0,0,9.26,5.77,9.974,9.974,
    0,0,0,17.42,10a9.76,9.76,0,0,0,2.25-.26A7.988,7.988,0,0,1,12,20Z"/>
    <path className="a" d="M0,0H24V24H0Z" style={{fill: 'none' }}/>
  </svg>
);

export default withTheme(Face);
