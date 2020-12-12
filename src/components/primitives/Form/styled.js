import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
  margin: 0;
  width: ${({ compact }) => (compact ? 'auto' : '100%')};
`;

const StyledField = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 6px 0;
`;

const StyledRequired = styled.div`
  color: #ea3d53;
  margin: 0 4px;
`;

const StyledLabel = styled.div`
  padding: ${(props) => (props.padded ? '0.7rem 6px' : '4px 6px')};
  font-size: 0.7rem;
  line-height: 1;
  color: ${(props) => (props.error ? '#ea3d53' : 'rgba(0, 0, 0, 0.3)')};
  display: flex;
`;

const StyledTextAreaWrapper = styled.div`
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.color.border};
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  background: none;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0.7rem 0.8rem;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const StyledSelectWrapper = styled.div``;

const StyledInputAbsoluteRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
`;

export {
  StyledInputWrapper,
  StyledField,
  StyledLabel,
  StyledTextAreaWrapper,
  StyledTextArea,
  StyledSelectWrapper,
  StyledInputAbsoluteRight,
  StyledRequired
};
