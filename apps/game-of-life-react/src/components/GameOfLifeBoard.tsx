import { useMemo } from "react";
import { Board } from "../types/Board";
import { ActionBar } from "./ActionBar";
import { GameBoard } from "./GameBoard";
import { useInterval } from "./useInterval";

export function GameOfLifeBoard() {
  const { board, toggle, isStarted } = useGameOfLifeBoard();

  return (
    <>
      <ActionBar isOn={isStarted} onToggle={toggle} />
      <GameBoard board={board} />
    </>
  );
}

function useGameOfLifeBoard() {
  const board: Board = useMemo(() => {
    return {
      height: 8,
      width: 8,
      rows: Array(8)
        .fill(null)
        .map(() => Array(8).fill(false)),
    };
  }, []);

  const { start, stop, toggle, isStarted } = useInterval({
    intervalAmount: 1000,
    workFn: () => {
      console.log("** workFn");
    },
  });

  return {
    board,
    isStarted,
    toggle,
  };
}
