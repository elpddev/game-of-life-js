import { Box, MantineProvider } from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";
import { ActionBar } from "./components/ActionBar";
import {
  GameOfLifeContext,
  GameOfLifeProvider,
} from "./providers/GameOfLifeProvider";
import { useContext } from "react";
import { GameBoard } from "./components/GameBoard";

function App() {
  return (
    <GameOfLifeProvider>
      <AppInner />
    </GameOfLifeProvider>
  );
}
function AppInner() {
  const { isStarted, height, width, toggle, setWidth, setHeight, board } =
    useContext(GameOfLifeContext);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={"100%"} p="xs">
            <ActionBar
              isOn={isStarted}
              height={height}
              width={width}
              onToggle={toggle}
              onWidthChange={setWidth}
              onHeightChange={setHeight}
            />
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            {/* Header content */}
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Box sx={{ height: "100%" }}>
          <GameBoard board={board} />
        </Box>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
