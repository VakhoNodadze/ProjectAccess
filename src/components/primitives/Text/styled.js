import styled from 'styled-components';

const StyledContainer = styled.p `
    font-family: ${(props) => props.fontFamily || props.theme.fonts.light};
    cursor: pointer;
`;

export { StyledContainer };