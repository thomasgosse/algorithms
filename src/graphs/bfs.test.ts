import { describe, expect, test } from "vitest";
import { bfs } from "./bfs";

describe("bfs", () => {
  test("oriented graph", () => {
    const graph = {
      Alice: ["Bob", "Claire"],
      Bob: ["Daisy"],
      Claire: ["Eve", "Frank"],
      Daisy: ["Gina"],
      Eve: [],
      Frank: ["Alice"],
      Gina: ["Claire"],
    };
    expect(bfs("Alice", graph)).toStrictEqual(Object.keys(graph));
  });

  test("undirected graph", () => {
    const graph = {
      Alice: ["Bob", "Claire"],
      Bob: ["Alice", "Daisy"],
      Claire: ["Alice", "Eve", "Frank"],
      Daisy: ["Bob", "Gina"],
      Eve: ["Claire"],
      Frank: ["Claire", "Gina"],
      Gina: ["Daisy", "Frank"],
    };
    expect(bfs("Alice", graph)).toStrictEqual(Object.keys(graph));
  });

  test("single node graph", () => {
    const graph = {
      Alice: [],
    };
    const result = bfs("Alice", graph);
    expect(result).toEqual(["Alice"]);
  });

  test("disconnected graph", () => {
    const graph = {
      Alice: ["Bob"],
      Bob: ["Alice"],
      Claire: ["Daisy"],
      Daisy: ["Claire"],
    };
    const result = bfs("Alice", graph);
    expect(result).toEqual(["Alice", "Bob"]);
  });

  test("node with no neighbors", () => {
    const graph = {
      Alice: ["Bob"],
      Bob: ["Alice"],
      Claire: [],
    };
    const result = bfs("Claire", graph);
    expect(result).toEqual(["Claire"]);
  });
});
