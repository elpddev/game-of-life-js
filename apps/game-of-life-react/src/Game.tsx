import { Stack } from "@mantine/core";
import { useContext } from "react";
import { ActionBar } from "./components/ActionBar";
import { GameBoard } from "./components/GameBoard";
import {
  GameOfLifeContext,
  GameOfLifeProvider,
} from "./providers/GameOfLifeProvider";

export function Game() {
  return (
    <GameOfLifeProvider>
      <GameInner />
    </GameOfLifeProvider>
  );
}
function GameInner() {
  const { isStarted, height, width, toggle, setWidth, setHeight, board } =
    useContext(GameOfLifeContext);

  return (
    <Stack>
      <ActionBar
        isOn={isStarted}
        height={height}
        width={width}
        onToggle={toggle}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
      />
      <GameBoard board={board} />
    </Stack>
  );
}
