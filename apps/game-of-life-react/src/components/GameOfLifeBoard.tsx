import { useCallback, useMemo, useState } from "react";
import { Board } from "../types/Board";
import { ActionBar } from "./ActionBar";
import { GameBoard } from "./GameBoard";
import {
  useEffectWithLatest,
  useEffectWithRefLatest,
} from "./useEffectWithLatest";

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

function useInterval({
  intervalAmount,
  workFn,
}: {
  intervalAmount: number;
  workFn: () => void;
}) {
  const [restartAction, setRestartAction] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const start = useCallback(() => {
    setRestartAction((prev) => true);
  }, []);

  const stop = useCallback(() => {
    setRestartAction((prev) => false);
  }, []);

  const toggle = useCallback(() => {
    setRestartAction((prev) => !prev);
  }, []);

  useEffectWithRefLatest(
    (state) => {
      if (!restartAction) {
        setIsStarted(false);
        return;
      }

      const timerId = setInterval(() => {
        state.workFn();
      }, state.intervalAmount);

      setIsStarted(true);

      return () => {
        if (!timerId) {
          return;
        }

        clearInterval(timerId);
      };
    },
    [restartAction],
    { workFn, intervalAmount }
  );

  return {
    isStarted,
    start,
    stop,
    toggle,
  };
}
