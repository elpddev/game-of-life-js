import { SimpleGrid } from "@mantine/core";
import { Board } from "../types/Board";
import { GameCell } from "./GameCell";

export function GameBoard({ board }: { board: Board }) {
  return (
    <SimpleGrid cols={board.width} spacing="sm" verticalSpacing="sm">
      {board.rows.flat().map((cell, index) => (
        <GameCell key={index} cell={cell} />
      ))}
    </SimpleGrid>
  );
}
