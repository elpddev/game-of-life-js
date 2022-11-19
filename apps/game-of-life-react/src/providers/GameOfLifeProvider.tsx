import { createContext, ReactNode, useMemo } from "react";
import { useGameOfLifeBoard } from "../components/useGameOfLifeBoard";
import { Board } from "../types/Board";

interface GameOfLifeStore {
  isStarted: boolean;
  height: number;
  width: number;
  toggle: () => void;
  setWidth: (n: number) => void;
  setHeight: (n: number) => void;
  board: Board;
}

const initialStore: GameOfLifeStore = {
  isStarted: false,
  height: 0,
  width: 0,
  toggle: () => {},
  setWidth: (n: number) => {},
  setHeight: (n: number) => {},
  board: { height: 0, width: 0, rows: [] },
};

export const GameOfLifeContext = createContext(initialStore);

export function GameOfLifeProvider({ children }: { children: ReactNode }) {
  const { board, height, width, toggle, setHeight, setWidth, isStarted } =
    useGameOfLifeBoard();

  // todo: react context selector to mitigate recreation of store ref by data updates
  const store = useMemo(
    () => ({
      board,
      height,
      width,
      toggle,
      setHeight,
      setWidth,
      isStarted,
    }),
    [board, height, width, toggle, setHeight, setWidth, isStarted]
  );

  return (
    <GameOfLifeContext.Provider value={store}>
      {children}
    </GameOfLifeContext.Provider>
  );
}
