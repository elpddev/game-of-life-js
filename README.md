# Game Of Life - Javascript

This repo includes [John Conway game of life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) several implementations. The [github pages deployment](https://elpddev.github.io/game-of-life-js/) is a module federation (micro frontend) of several implementations under different frontend frameworks.

## Development Concepts

### Game Data Structure

There are several data structure patterns to create the game of life.

#### Full Matrix

The naive approche is to represent the game board as an arrays of rows. Each game board cell is repesented as a memory item in the the row array.

This is the fastet implementation for rapid development of the game. The cons is that the bigger the board, the bigger the data structure is.

```ts
type Board = Row[];
type Row = boolean[];
```

#### Compressed Matrix - Live Cells Vectors

TBD

```ts

```

### Module Federation

Module federation is a technic of seperating an application or applications to seperated chunks, and be able to load them on demand in the browser.

Those chunks can be full application in their own self, making the all architecture a lazy loading apps that are loaded inside mainly a shell app.

This is a similar to the bundle of an application by a bundler in the build phase. In this process, the bundler replace the `import`/`require` statements with a managed import utility that point to the bundler chunk manager. The bundler combine all the chunks together and the manager is responsible to provide those chunks when requested by the proxy import utility.

The difference is that in module federation, those chunks are not bundled into the main chunk, and the `proxy import utility` does not statically load them from the bundle, but instead load them lazily from an outside source, ex other web resource. 

TBD
