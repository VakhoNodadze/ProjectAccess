/* eslint-disable max-len */

import React from 'react';
import { withTheme } from 'styled-components';

export const Search = ({theme}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: theme.color.text}}>
    <path d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"/>
  <path d="M0,0H24V24H0Z" style={{fill: 'none' }} />
  </svg>
);

export default withTheme(Search);
