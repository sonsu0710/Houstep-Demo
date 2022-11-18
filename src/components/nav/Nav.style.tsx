import styled from "styled-components";
import {flexCenter, marginAuto} from "../GlobalStyles";

const Navbar = styled.div`
  width: 70vw;
  height: 80px;
  z-index: 10;
  ${marginAuto}
  ${flexCenter}
`

const BorderBottom = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.07);
`

const InnerNavLeft = styled.div`
  display: flex;
`

const InnerNavRight = styled.div`
  display: flex;
`

const NavItem = styled.div`
  color: rgb(33, 45, 61);
  margin: 10px;
  padding: 5px 10px;
  //border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  
  line-height: 80px;
  white-space: nowrap;
  transform: rotate(0.03deg);
  
  cursor: pointer;
`

export {Navbar, InnerNavLeft, InnerNavRight, NavItem, BorderBottom}