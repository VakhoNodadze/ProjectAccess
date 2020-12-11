import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme.fontSizes.body};
    line-height: ${(props) => props.theme.lineHeights.body};;
    margin: 0;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {

    &:focus {
      outline: 0;
    }
  }

  input, textarea {
    font-family: ${(props) => props.theme.fonts.regular};
  }

  a {
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
    transition: color ${(props) => props.theme.duration.shortest}ms ${(props) => props.theme.animation.easeInOut};

    &:hover {
      color: #000;
    }

    &.active {
      color: ${(props) => props.theme.color.primary};
    }
  }


  h2 {
    font-size: ${(props) => props.theme.fontSizes.h1};
    line-height: ${(props) => props.theme.lineHeights.h1};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    line-height: ${(props) => props.theme.lineHeights.h2};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.h3};
    line-height: ${(props) => props.theme.lineHeights.h3};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.h4};
    line-height: ${(props) => props.theme.lineHeights.h4};
  }

  button {
    font-family: ${(props) => props.theme.fonts.semiBold};
    font-size: ${(props) => props.theme.fontSizes.body};
    line-height: ${(props) => props.theme.lineHeights.body};
    margin: 0;
    letter-spacing: .4px;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  b {
    font-family: ${(props) => props.theme.fonts.bold};
  }

  small {
    font-family: ${(props) => props.theme.fonts.semiBold};
    font-size: ${(props) => props.theme.fontSizes.caption};
    line-height: ${(props) => props.theme.lineHeights.caption};
  }

  label {
    font-family: ${(props) => props.theme.fonts.semiBold};
    font-size: ${(props) => props.theme.fontSizes.caption};
    line-height: ${(props) => props.theme.lineHeights.caption};
    text-transform: uppercase;
  }

  input, textarea {
    &::placeholder {
      color: ${(props) => props.theme.color.gray200};
    }
    &:disabled {
      background-color: rgba(0,0,0, .06);
    }
  }

  ol {
    padding: 0 1.2rem;
  }

  i, i.eva-hover {
    display: flex;
  }

  img {
    vertical-align: middle;
  }

  .card .content.extra .item {
    font-family: ${(props) => props.theme.fonts.bold};
  }

  .intrro-modal {
    .content {
      color: ${(props) => props.theme.color.text};

      ul {
        margin: 0 1.2rem;
        padding: 0;
      }

      h3 {
        font-size: 14px;
      }

    }
  }



  .DraftEditor-root {
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 0 0 ${(props) => props.theme.borderRadius.default} ${(props) => props.theme.borderRadius.default};
    padding: 1em;

    .public-DraftEditorPlaceholder-root {
      position: absolute;
      z-index: -1;
      color: ${(props) => props.theme.color.placeholder};

      &.public-DraftEditorPlaceholder-hasFocus {
        color: transparent;
      }
    }

    .DraftEditor-editorContainer {
      .public-DraftEditor-content {
        min-height: 100px;
      }
    }
  }


  #description {
    a {
      color: ${({ theme }) => theme.color.primary};
    }
    p {
      line-height: 1.4;
      margin: 0;
      margin-bottom: 12px;
    }
    br {
      display: none;
    }
    ul {
      line-height: 1;
      margin-bottom: 12px;
      li {
        margin: 0;
        line-height: 1.75;
      }
    }
  }

  .linkList {
    a {
      h4 {
        color: ${(props) => props.theme.color.text};
        text-decoration: none;
        transition: color ${(props) => props.theme.duration.default}ms ${(props) => props.theme.animation.easeInOut};
      }

      &:hover {
        h4 {
          color: ${(props) => props.theme.color.primary};
        }
      }
    }
  }

`;

export default GlobalStyle;
