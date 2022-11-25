// import React from "react";
// import { Suspense } from "react";
// @ts-ignore
import GameRemote from "game-of-life-react/App";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <span></span>
      </MantineProvider>
      <GameRemote />
    </div>
  );
}

export default App;
