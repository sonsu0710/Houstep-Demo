import styled from "styled-components";
import {flexCenter, marginAuto} from "../GlobalStyles";

const Container = styled.div`
  width: 70vw;
  height: 100vh;
  //background-color: #61dafb;

  ${marginAuto};
  margin-top: 60px;
`

const ArticleTitle = styled.h2`
  span {
    font-size: 36px;
    ${flexCenter}
  }
`

const TapMenu = styled.div`
  width: 100%;
  height: 44px;
  margin: 25px 0 0;
  border-bottom: rgb(221, 221, 221) solid 1px;
  ${flexCenter};
`

const TapMenuItem = styled.div`
  width: 120px;
  line-height: 44px;
  padding: 13px 0;
  ${flexCenter};
  align-items: center;
  
  span {
    font-size: 18px;
    font-weight: normal;
    color: #1D1D1D;
    transform: rotate(0.03deg);
  }
  
  &:hover {
    span {
      color: #3085ED;
      font-weight: bold;
    }
    border-bottom: 2px solid #3085ED;
  }
`


export {Container, ArticleTitle, TapMenu, TapMenuItem}