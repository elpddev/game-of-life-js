#!/usr/bin/env zx

import 'zx/globals';

await $`rm -rf dist`;
await $`mkdir dist`;
await $`mkdir dist/app-shell-gp`;
await $`mkdir dist/app-shell-gp/game-of-life-react`;
await $`cp -r ./apps/app-shell/dist/* ./dist/app-shell-gp`;
await $`cp -r ./apps/game-of-life-react/dist/assets/* ./dist/app-shell-gp/game-of-life-react`;