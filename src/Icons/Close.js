
import React from 'react';
import { withTheme } from 'styled-components';

export const Close = ({theme}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: theme.color.text}}>
    <path d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"/>
    <path className="a" d="M0,0H24V24H0Z" style={{fill: 'none'}}/>
  </svg>
);

export default withTheme(Close);
