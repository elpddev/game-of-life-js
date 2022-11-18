import { MantineProvider } from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";
import { GameOfLifeBoard } from "./components/GameOfLifeBoard";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={"100%"} p="xs">
            {/* Navbar content */}
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
        <GameOfLifeBoard />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
