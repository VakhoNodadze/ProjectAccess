import styled from 'styled-components';

const StyledContainer = styled.button `
    padding: 1rem;
    background-color: #305ECA;
    transform: translate(0%, -50%);
    border-radius: 50%;
    cursor: pointer;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    transition: box-shadow ${(props) => props.theme.duration.default}ms ${(props) => props.theme.animation.easeInOut},
      transform ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut}, opacity
        ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut};
    &:active,
    &:focus {
      outline: 0;
    }
    &:active{
        transform: translate(0%, -50%) scale(0.96);
    }
`;

export { StyledContainer };