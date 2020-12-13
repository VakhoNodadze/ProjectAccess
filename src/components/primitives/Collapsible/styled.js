import styled from 'styled-components';

// const StyledContainer = styled.div `
// `;

const StyledContainer = styled.div `
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition: all 0.3s ease-out;
    cursor: pointer;
`;

export { StyledContainer};