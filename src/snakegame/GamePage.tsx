import Game from "./game/Game";
import { GameContainer } from "./gamePage.style";
export const GamePage = () => {
  return (
    <>
      <GameContainer style={{ backgroundImage: "url('assets/image/sfond2.jpg')" }}>
        <Game />
      </GameContainer>
    </>
  );
};
