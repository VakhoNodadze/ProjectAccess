import styled from 'styled-components';

const Selector = styled.select`
    height: 48px;
    font-size: 13px;
    width: ${(props) => props.width};
    color: ${(props) => props.theme.color.placeholder};
    background-color: ${(props) => props.theme.color.backgroundSec};
    padding-left: 10px;
    margin: ${(props) => props.margin};
    border: none;
    transition: all 0.5s ease-in-out;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-radius: 0.5rem;
`;
const Option = styled.option`
    padding:0 2px 1px;
    background-color: #fff;
    color: #000
`;
export { Selector, Option };
