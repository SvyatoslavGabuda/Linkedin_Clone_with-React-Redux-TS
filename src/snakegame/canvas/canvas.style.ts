import styled from "styled-components";

export const Canvas = styled.canvas`
  border: 10px solid black;
  width: 800px;
  height: 400px;
  box-sizing: border-box;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    180deg,
    hsla(0, 75%, 46%, 1) 0%,
    hsla(234, 93%, 67%, 1) 100%
  );
`;
