import styled from 'styled-components';

const Selector = styled.select`
    background-color: #fff;
    height: 34px;
    font-size: 13px;
    width: ${(props) => props.width};
    color: ${(props) => props.theme.color.text};
    padding-left: 10px;
    margin: ${(props) => props.margin};
    border: none;
    transition: all 0.5s ease-in-out;
    border-bottom: 1px solid ${(props) => props.theme.color.gray100};
    border-radius: 0.5rem;
`;
const Option = styled.option`
    padding:0 2px 1px;
    background-color: #fff;
    color: #000
`;
export { Selector, Option };
