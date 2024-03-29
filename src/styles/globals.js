import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  strong{
    font-weight: 500;
  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #0f1624;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 100px;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background-color: #fff;
    }

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  p {
    margin-bottom: 0.5em;
  }
  
.child-p-mb-0:first-child {
  margin-bottom: 0;
}

  .profile-image {
    position: absolute;
    top: 36px;
    right: 24px;
  }
  

`;

export default GlobalStyles;
