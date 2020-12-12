import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in;
  overflow: overlay;
  opacity: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return '1';
    default:
      return '0';
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'opacity 0.1s ease-in-out';
    case 'out':
      return 'opacity 0.1s ease-in-out';
    default:
      return '';
    }
  }};
`;
const StyledContainer = styled.div`
  position: absolute;
  top: unset;
  margin-bottom: unset;
  min-height: 200px;
  min-width: 240px;
  max-height: 90vh;
  max-width: 96%;
  width: ${(props) => {
    switch (props.size) {
    case 'large':
      return '940px';
    case 'medium':
      return '800px';
    case 'small':
      return '450px';
    default:
      return '600px';
    }
  }};
  background-color: ${(props) => props.theme.color.backgroundSec};
  border-radius: ${({ theme }) => theme.borderRadius.big};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
  transform: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'scale(1)';
    default:
      return 'scale(0.82)';
    }
  }};
  transition: ${(props) => {
    switch (props.fadeType) {
    case 'in':
      return 'transform 0.1s';
    case 'out':
      return 'transform 0.1s';
    default:
      return '';
    }
  }};

  .content {
    max-height: 80vh;
  }
`;

const StyledContent = styled.div`
  padding: ${(props) => props.theme.spacing.extraHuge}px ${(props) => props.theme.spacing.huge}px;
  /* max-height: 80vh; */
`;

const StyledHeader = styled.div`
  width: '100%';
  background-color: ${(props) => props.theme.color.backgroundSec};
  margin: 0;
  padding: ${(props) => props.theme.spacing.huge}px;
  border-radius: ${({ theme }) => theme.borderRadius.big};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) => props.theme.color.primary};
`;

const StyledClose = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: solid 1px #f1f3f4;
  border-radius: 10rem;
  cursor: pointer;
  display: flex;
  height: 34px;
  width: 34px;
  justify-content: center;
  align-items: center;
`;

const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid ${(props) => props.theme.color.border};
  background-color: ${(props) => props.theme.color.bg};
  padding: ${(props) => props.theme.spacing.large}px;

  & > button {
    margin: 0 8px;
    min-width: 94px;
  }
`;

export { StyledOverlay, StyledContainer, StyledContent, StyledHeader, StyledClose, StyledActions };
