import { describe, expect, test } from "vitest";
import { dijkstra } from "./dijkstra";

describe("dijkstra", () => {
  test("example 1", () => {
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

    /**
     * Init
     * costs { A: 6, B: 2, End: undefined }
     * parents { A: Start, B: Start, End: undefined }
     * processed <empty>
     *
     * Round 1
     * closest not in processed is B
     * update A: from B (3) + B from start (2) = 5
     * update End: from B (5) + B from start (2) = 7
     * costs { A: 5, B: 2, End: 7 }
     * parents { A: B, B: Start, End: B }
     * processed <B>
     *
     * Round 2
     * closest not in processed is A
     * update End because a cheaper path is found: from A (1) + cost to reach A (5) = 6
     * costs { A: 5, B: 2, End: 6 }
     * parents { A: B, B: Start, End: A }
     * processed <A,B>
     *
     * Result
     * Start -> B -> A -> End for 6
     */

    expect(dijkstra("Start", "End", graph)).toStrictEqual(["Start", "B", "A", "End"]);
  });

  test("example 2", () => {
    const graph = {
      Book: {
        Disk: 5,
        Poster: 0,
      },
      Disk: {
        Guitar: 15,
        Battery: 20,
      },
      Poster: {
        Guitar: 30,
        Battery: 35,
      },
      Guitar: {
        Piano: 20,
      },
      Battery: {
        Piano: 10,
      },
      Piano: {},
    };

    expect(dijkstra("Book", "Piano", graph)).toStrictEqual(["Book", "Disk", "Battery", "Piano"]);
  });

  test("graph with cycle", () => {
    const graph = {
      A: {
        B: 1,
        C: 4,
      },
      B: {
        C: 2,
        D: 5,
      },
      C: {
        A: 3,
        D: 1,
      },
      D: {},
    };

    expect(dijkstra("A", "D", graph)).toStrictEqual(["A", "B", "C", "D"]);
  });

  test("multiple shortest paths", () => {
    const graph = {
      A: {
        B: 1,
        C: 2,
      },
      B: {
        End: 2,
      },
      C: {
        End: 1,
      },
      End: {},
    };

    // There are two paths: A -> B -> End (cost 3) and A -> C -> End (cost 3)
    try {
      expect(dijkstra("A", "End", graph)).toStrictEqual(["A", "C", "End"]);
    } catch {
      expect(dijkstra("A", "End", graph)).toStrictEqual(["A", "B", "End"]);
    }
  });

  test("disconnected nodes", () => {
    const graph = {
      A: {
        B: 2,
      },
      B: {
        C: 3,
      },
      C: {},
      D: {
        E: 1,
      },
      E: {},
    };

    expect(dijkstra("A", "D", graph)).toStrictEqual([]);
  });

  test("start and end same node", () => {
    const graph = {
      A: {
        B: 2,
      },
      B: {
        C: 3,
      },
      C: {},
    };
    expect(dijkstra("A", "A", graph)).toStrictEqual(["A"]);
  });

  test("large graph", () => {
    const graph = {
      Start: {
        A: 10,
        B: 5,
      },
      A: {
        C: 1,
        D: 2,
      },
      B: {
        A: 3,
        D: 9,
        E: 2,
      },
      C: {
        D: 4,
        End: 2,
      },
      D: {
        End: 6,
      },
      E: {
        D: 2,
        End: 4,
      },
      End: {},
    };
    expect(dijkstra("Start", "End", graph)).toStrictEqual(["Start", "B", "E", "End"]);
  });

  test("graph with no connections", () => {
    const graph = {
      A: {},
      B: {},
    };

    expect(dijkstra("A", "B", graph)).toStrictEqual([]);
  });
});
