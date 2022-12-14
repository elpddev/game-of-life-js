import { useCallback, useEffect, useState } from "react";
import { Board } from "../types/Board";
import { Cell } from "../types/Cell";
import { useInterval } from "./useInterval";

export function useGameOfLifeBoard() {
  const [height, setHeight] = useState(30);
  const [width, setWidth] = useState(30);

  const { board, moveNext } = useGameOfLife(height, width);

  const { start, stop, toggle, isStarted } = useInterval({
    intervalAmount: 1000,
    workFn: () => {
      moveNext(null);
    },
  });

  return {
    board,
    isStarted,
    height,
    width,
    setHeight,
    setWidth,
    toggle,
  };
}

export function useGameOfLife(height: number, width: number) {
  const [moveNext, moveNextInfo] = useNumeratedAction();

  const [board, setBoard] = useState<Board>(() => initBoard(height, width));

  useEffect(() => {
    setBoard(initBoard(height, width));
  }, [height, width]);

  useEffect(() => {
    setBoard((prev) => calcNextBoard(prev));
  }, [moveNextInfo.numerator]);

  return {
    board,
    moveNext,
  };
}

function calcNextBoard(board: Board): Board {
  const rows = board.rows.map((row, rowInd) =>
    row.map((cell, cellInd) => calcNextCell(cell, rowInd, cellInd, board))
  );

  const newBoard = {
    ...board,
    rows,
  };

  return newBoard;
}

function calcNextCell(
  cell: Cell,
  rowInd: number,
  cellInd: number,
  board: Board
): Cell {
  const liveCount = countLiveAround(rowInd, cellInd, board);

  if (cell && liveCount >= 2 && liveCount <= 3) {
    return true;
  }

  if (!cell && liveCount === 3) {
    return true;
  }

  return false;
}

function countLiveAround(
  rowInd: number,
  cellInd: number,
  board: Board
): number {
  let count = 0;
  const minRow = Math.max(0, rowInd - 1);
  const maxRow = Math.min(board.height - 1, rowInd + 1);

  for (let r = minRow; r <= maxRow; r += 1) {
    const row = board.rows[r];

    const minCell = Math.max(0, cellInd - 1);
    const maxCell = Math.min(cellInd + 1, row.length - 1);

    for (let c = minCell; c <= maxCell; c += 1) {
      if (r === rowInd && c === cellInd) {
        continue;
      }

      const cell = row[c];
      count += cell ? 1 : 0;
    }
  }

  return count;
}

interface ActionInfo {
  numerator: boolean;
  payload: any;
}
function useNumeratedAction(): [(payload: any) => void, ActionInfo] {
  const [actionInfo, setActionInfo] = useState<ActionInfo>(() => ({
    numerator: false,
    payload: null,
  }));

  const callback = useCallback((payload: any) => {
    setActionInfo((prev) => ({
      numerator: !prev.numerator,
      payload,
    }));
  }, []);

  return [callback, actionInfo];
}

function initBoard(height: number, width: number): Board {
  return {
    height,
    width,
    rows: Array(height)
      .fill(null)
      .map(() =>
        Array(width)
          .fill(null)
          .map(() => randomBoolean())
      ),
  };
}

function randomBoolean(): boolean {
  return Boolean(Math.floor(Math.random() * 2));
}
