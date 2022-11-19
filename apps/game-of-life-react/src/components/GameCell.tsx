import { Box } from "@mantine/core";
import { Cell } from "../types/Cell";

export function GameCell({ cell }: { cell: Cell }) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? cell
              ? theme.colors.dark[1]
              : theme.colors.dark[5]
            : cell
            ? theme.colors.blue[5]
            : theme.colors.blue[0],
        height: "30px",
      })}
    ></Box>
  );
}
