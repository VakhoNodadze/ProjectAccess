import styled, { css } from 'styled-components';

const StyledContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  height: ${(props) => props.theme.elementSize[props.size]};
  border-radius: ${(props) => props.theme.borderRadius[props.size]};
  /* box-shadow: 0px 4px 8px rgba(33, 106, 233, 0.6); */
  transform: scale(1);
  cursor: pointer;
  opacity: 1;
  transition: box-shadow ${(props) => props.theme.duration.default}ms ${(props) => props.theme.animation.easeInOut},
    transform ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut}, opacity
      ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut};

  ${(props) => {
    switch (props.size) {
    case 'tiny':
      return css`
          padding: 0 ${props.theme.spacing.small}px;
        `;
    case 'mini':
      return css`
          padding: 0 ${props.theme.spacing.big}px;
        `;
    case 'small':
      return css`
          padding: 0 ${props.theme.spacing.large}px;
        `;
    case 'default':
      return css`
          padding: 0 ${props.theme.spacing.extraLarge}px;
        `;
    default:
      return css`
          padding: 0 ${props.theme.spacing.default}px;
        `;
    }
  }};

  ${(props) => {
    switch (props.variant) {
    case 'basic':
      return css`
          background: transparent;
          border-radius: 0;
          border: 0;
          color: ${props.theme.color[props.color]};
          padding: 0;
          box-shadow: none;
        `;
    case 'outlined':
      return css`
          background: transparent;
          border-radius: ${props.theme.borderRadius.default};
          border: solid 1px ${props.theme.color[props.color]};
          color: ${props.theme.color[props.color]};
          box-shadow: none;
        `;
    case 'contained':
      return css`
          background-color: ${props.theme.palette[props.color][1000]};
          border-radius: ${props.theme.borderRadius.default};
          border: 0;
          color: #fff;

          &:hover {
            opacity: 0.8;
          }
        `;
    default:
      return css`
          background-color: ${props.active
    ? props.theme.palette[props.color][300]
    : props.theme.palette[props.color][200]};
          color: ${props.theme.palette[props.color][1000]};
          border: 0;
          box-shadow: none;
        `;
    }
  }};

  ${(props) => {
    switch (props.attached) {
    case 'bottom':
      return css`
          border: 0;
          border-top: ${props.isDisabled ? 0 : 'solid 0.5px rgba(0, 0, 0, 0.15)'};
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        `;
    default:
      return null;
    }
  }};

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.94;
      color: ${props.theme.color.secondary};
      background-color: ${props.theme.color.gray000};
      cursor: default !important;
    `};

  ${(props) =>
    props.circular &&
    css`
      border-radius: ${props.theme.borderRadius.rounded};
    `};

  &:active,
  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const StyledStartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  transition: transform 0.6s ease;

  transform: ${(props) => (props.active ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export { StyledContainer, StyledStartIcon };
