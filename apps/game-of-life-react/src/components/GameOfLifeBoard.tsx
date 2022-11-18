import { useMemo } from "react";
import { Board } from "../types/Board";
import { ActionBar } from "./ActionBar";
import { GameBoard } from "./GameBoard";

export function GameOfLifeBoard() {
  const { board } = useGameOfLife();
  return (
    <>
      <ActionBar />
      <GameBoard board={board} />
    </>
  );
}

function useGameOfLife() {
  const board: Board = useMemo(() => {
    return {
      height: 8,
      width: 8,
      rows: Array(8)
        .fill(null)
        .map(() => Array(8).fill(false)),
    };
  }, []);

  return {
    board,
  };
}
