import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setBestScore, setCurrentScore, setLastScore } from "../../app/reducers/gameScoreSlice";
import Canvas from "../canvas/Canvas";
import draw from "../draw/draw";
import { GameButton, GameWrapper, Score, PlayButton, SnakeTitle } from "./Game.styles";
import useGameLogic from "./useGameLogic";
import { Direction } from "./useGameLogic";

interface GameProps {}

export enum GameState {
  RUNNING,
  GAME_OVER,
  PAUSED,
}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.RUNNING);

  const dispatch = useAppDispatch();
  const bestScore = useAppSelector((state) => state.gameScore.bestScore);
  const lastScore = useAppSelector((state) => state.gameScore.lastScore);

  const onGameOver = () => {
    setGameState(GameState.GAME_OVER);
    dispatch(setLastScore((snakeBody.length - 1) * 10));
    if ((snakeBody.length - 1) * 10 > bestScore) {
      dispatch(setBestScore((snakeBody.length - 1) * 10));
    }
  };

  const { snakeBody, onKeyDownHandler, foodPosition, resetGameState, setDirection, direction } =
    useGameLogic({
      canvasHeight: 200,
      canvasWidth: 400,
      onGameOver,
      gameState,
    });

  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody, foodPosition });
  };
  const onKeyDownBtn = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "KeyS":
        break;
      case "KeyW":
        break;
      case "KeyD":
        break;
      case "KeyA":
        break;
    }
  };

  return (
    <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Row>
        <SnakeTitle>---SNAKE---</SnakeTitle>
      </Row>
      {/* Punteggio */}
      <Row className="justify-content-between " style={{ width: 800 }}>
        <Col className="text-start">
          <Score>Best score: {bestScore} </Score>
        </Col>
        <Col className="text-center">
          <Score>{`Your score: ${(snakeBody.length - 1) * 10} `}</Score>
        </Col>
        <Col className="text-end">
          <Score>Last score: {lastScore} </Score>
        </Col>
      </Row>
      {/* campo di gioco */}
      <Canvas ref={canvasRef} draw={drawGame} />
      {/* Bottoni di controllo */}
      <Row className="justify-content-between  pt-4" style={{ width: 800 }}>
        <Col xs={4}>
          <Row className="justify-content-center ">
            <Col xs={3} className="p-0">
              <PlayButton
                onClick={() => {
                  if (direction !== Direction.DOWN) {
                    setDirection(Direction.UP);
                  }
                }}
              >
                W
              </PlayButton>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={3} className="p-0">
              <PlayButton
                onClick={() => {
                  if (direction !== Direction.RIGHT) {
                    setDirection(Direction.LEFT);
                  }
                }}
              >
                A
              </PlayButton>
            </Col>
            <Col xs={3} className="p-0">
              <PlayButton
                onClick={() => {
                  if (direction !== Direction.UP) {
                    setDirection(Direction.DOWN);
                  }
                }}
              >
                S
              </PlayButton>
            </Col>

            <Col xs={3} className="p-0">
              <PlayButton
                onClick={() => {
                  if (direction !== Direction.LEFT) {
                    setDirection(Direction.RIGHT);
                  }
                }}
              >
                D
              </PlayButton>
            </Col>
          </Row>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
          {gameState === GameState.GAME_OVER ? (
            <GameButton
              onClick={() => {
                setGameState(GameState.RUNNING);
                resetGameState();
              }}
            >
              Play Again
            </GameButton>
          ) : (
            <GameButton
              onClick={() => {
                setGameState(
                  gameState === GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING
                );
              }}
            >
              {gameState === GameState.RUNNING ? "Pause" : "Play"}
            </GameButton>
          )}
        </Col>
      </Row>
    </GameWrapper>
  );
};

export default Game;
