import {
  ActionIcon,
  AppShell,
  Navbar,
  Header,
  Box,
  Group,
  Text,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { ActionBar } from "./components/ActionBar";
import {
  GameOfLifeContext,
  GameOfLifeProvider,
} from "./providers/GameOfLifeProvider";
import { useContext, useState } from "react";
import { GameBoard } from "./components/GameBoard";
import React from "react";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <GameOfLifeProvider>
          <AppInner />
        </GameOfLifeProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
function AppInner() {
  const { isStarted, height, width, toggle, setWidth, setHeight, board } =
    useContext(GameOfLifeContext);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
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
          <Group
            position="apart"
            sx={{
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text fz="lg" fw={700}>
              Game Of Life
            </Text>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Group>
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
  );
}

export default App;
