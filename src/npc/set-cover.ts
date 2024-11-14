import { create_power_set } from "../structures/power-set.js";

/**
 * Greedy implementation to approximate the solution in reasonable time complexity O(m * n)
 * where m is the number of elements in the universe and n the number of sets
 */
export function set_cover(universe: Set<string>, sets: Record<string, Set<string>>): string[] {
  const results = [];
  let remaining_sets = new Set(Object.keys(sets));
  let left_to_cover = new Set(universe);
  while (remaining_sets.size && left_to_cover.size) {
    const remaining_sets_keys = remaining_sets.keys();
    const best_set_key = remaining_sets_keys.reduce((acc, sk) => {
      const best_coverage = sets[acc].intersection(left_to_cover).size;
      const current_coverage = sets[sk].intersection(left_to_cover).size;
      if (current_coverage >= best_coverage) {
        acc = sk;
      }
      return acc;
    }, remaining_sets_keys.next().value);

    remaining_sets.delete(best_set_key);
    results.push(best_set_key);
    left_to_cover = left_to_cover.difference(sets[best_set_key]);
  }

  if (left_to_cover.size > 0) return [];
  return results;
}

/**
 * Brute force implementation creating a power set. The time complexity is O(2^n) which makes it exponentially
 * longer and not suitable for large sets.
 * Example: 14 sets took the test ~280 to run
 */
export function set_cover_power_set(universe: Set<string>, sets: Record<string, Set<string>>): string[] {
  const power_set = create_power_set(new Set(Object.keys(sets)));

  const coverage_combinations = Array.from(power_set, (subset) => {
    const combined_coverage = { keys: new Set<string>(), values: new Set<string>() };
    subset.forEach((key) => {
      combined_coverage.keys.add(key);
      for (const state of sets[key]) {
        combined_coverage.values.add(state);
      }
    });
    return combined_coverage;
  });

  const valid_combinations = coverage_combinations.filter((item) => universe.difference(item.values).size === 0);

  if (valid_combinations.length === 0) return [];

  return valid_combinations.reduce(
    (smallest, current) => (current.keys.size < smallest.length ? [...current.keys] : smallest),
    [...valid_combinations[0].keys],
  );
}
