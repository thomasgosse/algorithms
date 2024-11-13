import { expect, test } from "vitest";
import { set_cover } from "./set-cover";

function validate(universe: Set<string>, sets: Record<string, Set<string>>, result: string[]) {
  // 1. Collect all items covered by the selected sets
  const covered = new Set(result.flatMap((key) => [...sets[key]]));

  // 2. Check if all required items are covered
  expect(covered).toEqual(universe);

  // 3. Verify that result only includes valid sets names
  const allowed_names = new Set(Object.keys(sets));
  result.forEach((station) => {
    expect(allowed_names.has(station)).toBe(true);
  });
}

test("set_cover from grokking algorithms", () => {
  const states = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
  const stations = {
    kone: new Set(["id", "nv", "mt"]),
    ktwo: new Set(["wa", "mt", "id"]),
    kthree: new Set(["or", "nv", "ca"]),
    kfour: new Set(["nv", "ut"]),
    kfive: new Set(["ca", "az"]),
  };
  const results = set_cover(states, stations);

  validate(states, stations, results);
});

test("set_cover with full coverage not possible", () => {
  const states = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
  const stations = {
    kone: new Set(["id", "nv", "mt"]),
    ktwo: new Set(["wa", "mt", "id"]),
  };
  const results = set_cover(states, stations);
  expect(results).toStrictEqual([]);
});

test("set_cover with all states", () => {
  const states = new Set([
    "al",
    "ak",
    "az",
    "ar",
    "ca",
    "co",
    "ct",
    "dc",
    "de",
    "fl",
    "ga",
    "hi",
    "id",
    "il",
    "in",
    "ia",
    "ks",
    "ky",
    "la",
    "me",
    "md",
    "ma",
    "mi",
    "mn",
    "ms",
    "mo",
    "mt",
    "ne",
    "nv",
    "nh",
    "nj",
    "nm",
    "ny",
    "nc",
    "nd",
    "oh",
    "ok",
    "or",
    "pa",
    "ri",
    "sc",
    "sd",
    "tn",
    "tx",
    "ut",
    "vt",
    "va",
    "wa",
    "wv",
    "wi",
    "wy",
  ]);
  const stations = {
    stationA: new Set(["ca", "nv", "or", "wa"]),
    stationB: new Set(["tx", "ok", "nm", "az"]),
    stationC: new Set(["ny", "pa", "nj", "ct"]),
    stationD: new Set(["fl", "ga", "al", "sc"]),
    stationE: new Set(["il", "in", "ia", "mo"]),
    stationF: new Set(["mi", "oh", "wi", "mn"]),
    stationG: new Set(["ma", "nh", "vt", "me", "ri"]),
    stationH: new Set(["va", "wv", "nc", "ky"]),
    stationI: new Set(["ks", "ne", "sd", "nd"]),
    stationJ: new Set(["ar", "la", "ms", "tn"]),
    stationK: new Set(["mt", "wy", "id", "ut", "co"]),
    stationL: new Set(["hi", "ak"]),
    stationM: new Set(["de", "md", "dc"]),
    stationN: new Set(["ca", "nv", "az", "ut"]),
  };
  const results = set_cover(states, stations);

  validate(states, stations, results);
});
