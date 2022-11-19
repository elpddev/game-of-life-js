import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Flex } from "@mantine/core";
import { Board } from "../types/Board";
import { ActionBar } from "./ActionBar";
import { GameBoard } from "./GameBoard";
import { Cell } from "../types/Cell";
import { useGameOfLifeBoard } from "./useGameOfLifeBoard";

export function GameOfLifeBoard() {
  return (
    <Flex direction="column" gap="sm" sx={{ height: "100%" }}>
      <Box sx={{ flex: 1 }}></Box>
    </Flex>
  );
}
