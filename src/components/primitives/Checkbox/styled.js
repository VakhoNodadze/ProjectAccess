import styled, { css } from 'styled-components';

const StyledContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: #00d9b0;
    }

    &:focus + span {
      box-shadow: 0 0 1px #ccc;
    }

    &:checked + span:before {
      transform: translateX(20px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      border-radius: 50%;
      background-color: white;
      transition: 0.4s;
    }
  }
`;

const StyledContent = styled.div``;

export { StyledContainer, StyledContent };
