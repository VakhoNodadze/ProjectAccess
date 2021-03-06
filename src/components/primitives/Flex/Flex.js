import styled, { css } from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-content: stretch;
  transition: all 0.3s, opacity 0.5s ease;
  opacity: 1;
  visibility: visible;
  position: relative;
  ${(props) => props.inline
    && css`
      display: inline-flex;
    `};
  ${(props) => props.direction
    && css`
      flex-direction: ${props.direction};
    `};
  ${(props) => props.wrap
    && css`
      flex-wrap: ${props.wrap};
    `};
  ${(props) => props.alignContent
    && css`
      align-content: ${props.alignContent};
    `};
  ${(props) => props.align
    && css`
      align-items: ${props.align};
    `};
  ${(props) => props.full
    && css`
      width: 100%;
      height: 100%;
      flex-basis: 100%;
    `};
  ${(props) => props.center
    && css`
      align-items: center;
      justify-content: center;
    `};
  ${(props) => props.width
    && css`
      width: ${props.width};
    `};
  ${(props) => props.height
    && css`
      height: ${props.height};
    `};
  ${(props) => props.padding
    && css`
      padding: ${props.padding};
    `};
  ${(props) => props.margin
    && css`
      margin: ${props.margin};
    `};
  ${(props) => props.flex
    && css`
      flex: ${props.flex};
    `};
  ${(props) => props.position === 'absolute'
    && css`
      position: ${props.position};
      top: 0;
      left: 0;
    `};
  ${(props) => props.hide
    && css`
      opacity: 0;
      visibility: hidden;
    `};
    ${(props) => props.justify
      && css`
        justify-content: ${props.justify};
      `};
`;

export default Flex;
