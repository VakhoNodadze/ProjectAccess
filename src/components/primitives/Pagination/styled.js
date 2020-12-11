import styled from 'styled-components';

const StyledContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    float: left;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    min-width: 38px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.54);
    border: solid 1px rgba(0,0,0,0.15);
    background-color: #fff;
    margin: 0;
    margin-right: 6px;
    cursor: pointer;

    &.active {
      border-color: #2675fe;
      color: #2675fe;
    }
  }
`;

export { StyledContainer };
