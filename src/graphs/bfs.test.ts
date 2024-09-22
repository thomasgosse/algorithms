import { describe, expect, test } from "vitest";
import { bfs, bfs_shortest_path } from "./bfs";

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

describe("bfs_shortest_path", () => {
  test("oriented graph 1", () => {
    const graph = {
      Alice: ["Bob", "Claire"],
      Bob: ["Daisy"],
      Claire: ["Eve", "Frank"],
      Daisy: ["Gina"],
      Eve: [],
      Frank: ["Alice"],
      Gina: ["Claire"],
    };
    expect(bfs_shortest_path("Alice", "Eve", graph)).toStrictEqual(["Alice", "Claire", "Eve"]);
    expect(bfs_shortest_path("Alice", "Gina", graph)).toStrictEqual(["Alice", "Bob", "Daisy", "Gina"]);
  });

  test("oriented graph 2", () => {
    const graph = {
      Alice: ["Bob", "Claire", "David"],
      Bob: ["Eve", "Frank", "Gina"],
      Claire: ["Helen", "Ivy"],
      David: ["Jack", "Karl"],
      Eve: ["Liam"],
      Frank: ["Mia", "Nina"],
      Gina: ["Oscar", "Paul"],
      Helen: ["Quincy", "Rita"],
      Ivy: ["Steve"],
      Jack: ["Tom"],
      Karl: ["Uma", "Vince"],
      Liam: ["Walter"],
      Mia: ["Xander"],
      Nina: ["Yvonne"],
      Oscar: [],
      Paul: ["Zara"],
      Quincy: ["Bob"],
      Rita: [],
      Steve: ["Alice"],
      Tom: [],
      Uma: [],
      Vince: [],
      Walter: [],
      Xander: [],
      Yvonne: [],
      Zara: [],
    };
    expect(bfs_shortest_path("Alice", "Zara", graph)).toStrictEqual(["Alice", "Bob", "Gina", "Paul", "Zara"]);
  });

  test("single node graph", () => {
    const graph = {
      Alice: [],
    };
    const result = bfs_shortest_path("Alice", "Alice", graph);
    expect(result).toEqual(null);
  });

  test("disconnected graph", () => {
    const graph = {
      Alice: ["Bob"],
      Bob: ["Alice"],
      Claire: ["Daisy"],
      Daisy: ["Claire"],
    };
    const result = bfs_shortest_path("Alice", "Daisy", graph);
    expect(result).toEqual(null);
  });
});
