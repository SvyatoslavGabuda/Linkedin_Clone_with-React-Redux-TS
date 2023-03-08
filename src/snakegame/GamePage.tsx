import { useEffect, useState } from "react";
import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import Game from "./game/Game";

import { GameContainer, PlayerBtn } from "./gamePage.style";
import track from "./songs/songs.mp3";
export const GamePage = () => {
  const [player, setPlayer] = useState(new Audio(track));
  const [playPause, setPlayPause] = useState(false);

  const handlePlay = () => {
    if (playPause) {
      player.pause();
      setPlayPause(false);
    } else {
      player.play();
      setPlayPause(true);
    }
  };
  useEffect(() => {
    player.play();
    setPlayPause(true);
  }, []);
  return (
    <>
      <GameContainer
        style={{
          backgroundImage: "url('assets/image/sfond2.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <PlayerBtn onClick={handlePlay}>
          {playPause ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
        </PlayerBtn>
        <Game />
      </GameContainer>
    </>
  );
};
