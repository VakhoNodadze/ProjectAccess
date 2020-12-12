import styled, { css } from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  /* min-width: ${props => {
    switch (props.size) {
      case 'tiny':
        return '80px'
      case 'mini':
        return '250px'
      default:
        return '300px'
    }
  }}; */
  margin-top: ${props => (props.label ? '16px' : 0)};
`

const StyledContent = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%; */
  height: ${props => props.theme.elementSize[props.size]};

  ${props =>
    !props.label &&
    css`
      border: ${props => (props.basic ? '0' : `1px solid ${props.theme.color.border}`)};
      border-bottom: 1px solid ${props => props.theme.color.border};
    `};

  border-radius: ${props => (props.basic ? '0' : props.theme.borderRadius.default)};
  background-color: ${props => props.theme.color.elementBg};
  border-color: ${props => (props.error ? 'red' : props.theme.color.border)};
  z-index: ${props => (props.isOpen ? '100' : '0')};
  cursor: ${props => (props.search ? 'inherit' : 'pointer')};
  transition: all ${props => props.theme.duration.default}ms ${props => props.theme.animation.easeInOut};

  &:hover {
    border-color: ${props => props.theme.color.borderHover};
  }

  ${props => {
    switch (props.attached) {
      case 'left':
        return css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left-color: transparent;
        `
      default:
        return null
    }
  }};

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.theme.color.primary} !important;
    `};

  & > .icon {
    padding: 0 ${props => props.theme.spacing.big}px;
  }

  ${({ circular, theme, size }) =>
    circular &&
    css`
      border-radius: ${theme.spacing[size] * 4}px;
    `};
`

const StyledInput = styled.input`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%; */
  height: 100%;
  width: 100%;

  padding: 0 ${props => props.theme.spacing[props.size] * 2}px;

  ${props =>
    props.hasIcon &&
    css`
      padding-left: ${props => props.theme.spacing.extraHuge}px;
    `};

  ${props =>
    props.paddingLeft > 0 &&
    css`
      padding-left: ${props.paddingLeft}px;
    `};

  border: none;
  background: transparent;
  font-size: 14px;
  color: ${props => props.theme.color.text};

  &:focus {
    outline: 0;
  }
  &:disabled {
    /* background-color: rgba(0, 0, 0, 0.008); */
    color: rgba(0, 0, 0, 0.34);
  }
  &::placeholder {
    color: ${props => props.theme.color.placeholder};
  }
`

const StyledPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  padding-left: ${props => (props.hasIcon ? `${props.theme.spacing.extraHuge}px` : `${props.theme.spacing.big}px`)};
  border-radius: 6px;
  font-size: 14px;
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.3)')};
`

const StyledIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`

const StyledSpinner = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0;
  padding: 0 20px;
  line-height: 48px;
  z-index: 100;
`

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => (props.active ? 1 : 0)};
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius.default};
  /* background-color: ${props => (props.active ? '#fff' : 'none')}; */
  cursor: text;
  transform: translate(0, 0) scale(1);
  transform-origin: top left;
  transition: transform 150ms ease-out;

  height: 100%;

  padding: 0 ${props => props.theme.spacing[props.size] * 2}px;

  ${props =>
    props.active &&
    css`
      transform: translate(4px, -${props.theme.spacing[props.size] * 2 + 2}px) scale(0.75);
    `};
`

// radio
const StyledRadioContainer = styled.div`
  position: relative;
  min-width: 38px;
  height: ${props => props.theme.elementSize[props.size]};

  & > .content {
    & > label {
      border-radius: ${props => props.theme.borderRadius[props.size]};
    }
  }
`
const StyledRadioContent = styled.div`
  height: 100%;
`

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: fixed;
  width: 0;
  background: transparent;

  & ~ label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.54);
    border: ${props => (props.basic ? '0' : 'solid 1px rgba(0, 0, 0, 0.15)')};
    margin: 0;
    cursor: pointer;
  }

  &:checked ~ label,
  &:checked ~ label .checkmark {
    border-color: #2675fe;
    color: #2675fe;

    &:after {
      background-color: #2675fe;
    }
  }
`

const StyledRadioCheckmark = styled.div`
  position: relative;
  height: 18px;
  width: 18px;
  margin-left: 12px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.34);
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

// checkbox
const StyledCheckboxContainer = styled.div``
const StyledCheckboxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > label {
    border-color: ${props => (props.error ? 'red' : props.theme.color.border)} !important;
  }
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: fixed;
  width: 0;
  background: transparent;

  & ~ label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.15);
    background-color: transparent;

    svg {
      display: none;
    }
  }

  &:checked ~ label {
    background-color: #2675fe;

    svg {
      display: block;
    }
  }
`

const StyledFieldset = styled.fieldset`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: inherit;
  border-color: ${props => (props.error ? props.theme.color.danger : props.theme.color.border)};
  pointer-events: none;
`

const StyledLegend = styled.legend`
  width: auto;
  max-width: 0.0001px;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 0.75em;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  visibility: hidden;

  ${props =>
    props.active &&
    css`
      max-width: unset;
    `};
`

export {
  StyledContainer,
  StyledContent,
  StyledInput,
  StyledPlaceholder,
  StyledIcon,
  StyledSpinner,
  StyledLabel,
  StyledRadioContainer,
  StyledRadio,
  StyledRadioContent,
  StyledRadioCheckmark,
  StyledCheckboxContainer,
  StyledCheckboxContent,
  StyledCheckbox,
  StyledFieldset,
  StyledLegend
}
