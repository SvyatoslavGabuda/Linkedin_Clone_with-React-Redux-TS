import styled from "styled-components";

export const GameWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  outline: none;

  flex-direction: column;
`;

export const Score = styled.h6`
  user-select: none;
  font-family: monospace;
  background: transparent;
  font-size: 1.3em;

  color: yellow;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
`;
export const GameButton = styled.button`
  font-family: monospace;
  padding: 10px 120px;

  margin: 5px;
  border: 5px outset #f67b0a;
  background: radial-gradient(circle, hsla(117, 71%, 41%, 1) 0%, hsla(19, 100%, 50%, 1) 100%);
  box-shadow: 0px 0px 29px 32px hsla(19, 100%, 50%, 1);
  color: white;
  font-size: 1.5em;
  &:hover {
    border: 5px inset #f67b0a;
    background: radial-gradient(circle, hsla(19, 100%, 50%, 1) 0%, hsla(117, 71%, 41%, 1) 100%);
    box-shadow: 0px 0px 20px 25px hsla(117, 71%, 41%, 1);
  }
`;
export const PlayButton = styled.button`
  font-family: monospace;
  padding: 10px 10px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 5px;
  border: 8px outset yellow;
  background: radial-gradient(circle, hsla(219, 97%, 46%, 1) 25%, hsla(73, 100%, 50%, 1) 100%);
  box-shadow: 0px 0px 41px 11px rgba(200, 255, 0, 0.8);

  color: white;
  font-size: 1em;
  font-weight: 900;
  &:hover {
    border: 8px inset yellow;
    background: radial-gradient(circle, hsla(73, 100%, 50%, 1) 0%, hsla(219, 97%, 46%, 1) 100%);
    color: blue;
    box-shadow: 0px 0px 41px 11px hsla(219, 97%, 46%, 1);
  }
`;

export const SnakeTitle = styled.h2`
  user-select: none;
  font-family: monospace;
  color: white;
  font-style: oblique;
  font-weight: 900;
  font-size: 4em;
  text-align: center;
`;
