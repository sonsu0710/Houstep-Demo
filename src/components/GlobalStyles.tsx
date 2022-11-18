import styled, {createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }
`

const flexCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  //border: solid 1px black;
`;

const marginAuto = css`
  margin-right: auto;
  margin-left: auto;
`

export default GlobalStyle;
export {flexCenter, marginAuto}