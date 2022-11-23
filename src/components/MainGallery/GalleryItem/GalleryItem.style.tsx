import styled from "styled-components";

const GalleryItemDiv = styled.div`
  width: 30%;
  height: 30%;
  margin-right: (10/6)%;
  margin-left: (10/6)%;
  margin-top: 30px;
  //background-color: #282c34;
  border-radius: 10px;
`

const GalleryImg = styled.img`
  width: 100%;
  height: 85%;
  //background-color: aliceblue;
  border-radius: inherit;
`

const GalleryText = styled.div`
  width: 100%;
  height: 15%;
  //background-color: aquamarine;
  border-radius: inherit;
  p {
    font-size: 16px;
    font-weight: bold;
    transform: rotate(0.03deg);
    padding-top: 10px;
  }
`

export {GalleryItemDiv, GalleryImg, GalleryText}