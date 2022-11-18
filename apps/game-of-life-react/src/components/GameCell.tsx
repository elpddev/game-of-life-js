import { Cell } from "../types/Cell";

export function GameCell({ cell }: { cell: Cell }) {
  return <div>{cell ? "true" : "false"}</div>;
}
