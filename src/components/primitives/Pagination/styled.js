import styled from 'styled-components';


const PrevNext = styled.span `
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.light};
    margin: 0 0.3rem;
    padding: 0 0.3rem;
    cursor: pointer;
    color: ${props => props.theme.color.text};
    &:hover{
        background-color: ${(props) => props.theme.color.gray000};
    }
    
`;
const Page = styled.li `
    font-family: ${(props) => props.theme.fonts.bold};
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    color: ${props => props.theme.color.text};
    background-color: ${(props) => (props.active ? props.theme.color.gray200 : 'transparent')};
    margin: 0 0.2rem;
    &:hover{
        background-color: ${(props) => props.theme.color.gray000};
    }
`;
export { PrevNext, Page };