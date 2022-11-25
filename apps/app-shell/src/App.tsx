// import React from "react";
// import { Suspense } from "react";
// @ts-ignore
import { Game as GameReact } from "game-of-life-react/Game";
// @ts-ignore
import GameVueRemote from "game-of-life-vue/App";
import { applyVueInReact, applyPureVueInReact } from "veaury";
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
  Tabs,
} from "@mantine/core";
import {
  IconSun,
  IconMoonStars,
  IconPhoto,
  IconMessageCircle,
} from "@tabler/icons";
import { useContext, useState } from "react";

const GameVueReact = applyVueInReact(GameVueRemote);

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
        <AppInner />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function AppInner() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [activeTab, setActiveTab] = useState<string | null>("react");

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={"100%"} p="xs">
          Game
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
        <Tabs value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="react" icon={<IconPhoto size={14} />}>
              React
            </Tabs.Tab>
            <Tabs.Tab value="vue" icon={<IconMessageCircle size={14} />}>
              Vue
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="react" pt="xs">
            {activeTab === "react" && <GameReact>a</GameReact>}
          </Tabs.Panel>

          <Tabs.Panel value="vue" pt="xs">
            {activeTab === "vue" && <GameVueReact />}
          </Tabs.Panel>
        </Tabs>
      </Box>
    </AppShell>
  );
}

export default App;
