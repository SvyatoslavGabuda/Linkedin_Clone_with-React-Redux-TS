import styled from "styled-components";

export const GameWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  outline: none;

  flex-direction: column;
`;

export const Score = styled.h1`
  background: transparent;
  color: lightcyan;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
`;
export const GameButton = styled.button`
  padding: 10px 85px;
  border-radius: 50px;
  margin: 5px;
  border: 5px outset blue;
  background: linear-gradient(90deg, hsla(0, 75%, 46%, 1) 0%, hsla(234, 93%, 67%, 1) 100%);
  color: white;
  font-size: 1.5em;
`;
