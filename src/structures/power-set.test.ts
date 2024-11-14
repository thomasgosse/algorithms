import { describe, expect, test } from "vitest";
import { create_power_set } from "./power-set";

describe("create_power_set", () => {
  test("it should construct a power set", () => {
    const power_set = create_power_set(new Set(["a", "b", "c"]));
    expect(power_set).toStrictEqual(
      new Set([
        new Set(),
        new Set(["a"]),
        new Set(["b"]),
        new Set(["c"]),
        new Set(["a", "b"]),
        new Set(["a", "c"]),
        new Set(["b", "c"]),
        new Set(["a", "b", "c"]),
      ]),
    );
  });

  test("it should construct the empty power set", () => {
    const power_set = create_power_set(new Set());
    expect(power_set).toStrictEqual(new Set([new Set()]));
  });

  test("it should assert the set size for a big input set", () => {
    const power_set = create_power_set(new Set(["a", "b", "c", "d", "e", "f", "g", "h"]));
    expect(power_set.size).toBe(256);
  });
});
