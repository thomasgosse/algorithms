import { test } from "vitest";
import { dijkstra } from "./dijkstra";

test("dijkstra", () => {
  const graph = {
    Start: {
      A: 6,
      B: 2,
    },
    A: {
      End: 1,
    },
    B: {
      A: 3,
      End: 5,
    },
    End: {},
  };

  dijkstra("Start", "End", graph);
});
