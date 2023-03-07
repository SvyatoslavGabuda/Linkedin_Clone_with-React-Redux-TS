import styled from "styled-components";

export const GameContainer = styled.div`
  position: relative;
  border: 10px solid gray;
  width: 100%;
  height: 100%;

  padding: 10px;
`;
export const PlayerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  border: none;
  background: transparent;
  color: white;
  height: 60px;
  width: 60px;
  font-size: 3em;
  border-radius: 50%;
  box-shadow: 0px 0px 19px 10px rgb(231, 166, 26);
  color: rgb(231, 166, 26);
  border: 5px solid red;
  &:hover {
    box-shadow: 0px 0px 19px 10px #23b5d3;
    color: #23b5d3;
  }
`;
