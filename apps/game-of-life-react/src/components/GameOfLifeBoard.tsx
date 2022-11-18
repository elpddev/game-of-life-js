import { useMemo } from "react";
import { SimpleGrid } from "@mantine/core";

export function GameOfLifeBoard() {
  const { board } = useGameOfLife();
  return <Board board={board} />;
}

type Cell = boolean;

type Row = Cell[];
interface Board {
  height: number;
  width: number;
  rows: Row[];
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

function Cell({ cell }: { cell: Cell }) {
  return <div>{cell ? "true" : "false"}</div>;
}

function Board({ board }: { board: Board }) {
  return (
    <SimpleGrid cols={board.width} spacing="sm" verticalSpacing="sm">
      {board.rows.flat().map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </SimpleGrid>
  );
}
