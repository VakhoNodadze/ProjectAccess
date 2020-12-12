import styled from 'styled-components';

const Slider = styled.span `
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ff6666;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    &:before{
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        right: 15px;
        bottom: -3px;
        background-color: #ff1a1a;
        -webkit-transition: .4s;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;

const Label = styled.label `
    position: relative;
    display: inline-block;
    width: 30px;
    height: 10px;
    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    & input:checked + ${Slider}{
        background-color: #6e8ed9;
    }
    & input:checked + ${Slider}:before{
        transform: translateX(20px);
        background-color: ${(props) => (props.color ? props.color : props.theme.color.blue)};
    }
`;


export { Label, Slider };