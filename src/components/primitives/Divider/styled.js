import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: ${(props) => (props.size ? `${props.size}px 0` : '6px 0')};
  height: ${(props) => (props.isHidden ? 0 : '1px')};
  background-color: #f1f3f4;
`;

const StyledWithContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eee;
  }
  &::before {
    margin-right: 1em;
  }
  &::after {
    margin-left: 1em;
  }
`;

export { StyledContainer, StyledWithContent };
