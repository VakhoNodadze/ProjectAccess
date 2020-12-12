import styled from 'styled-components';

const StyledContainer = styled.p `
    font-family: ${(props) => props.fontFamily || props.theme.fonts.light};
    color: ${props => props.theme.color.text};
    cursor: pointer;
`;

export { StyledContainer };