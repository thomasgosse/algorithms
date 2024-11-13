/**
 * Glutton implementation to approximate the solution in reasonable time complexity O(m * n)
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

// @todo: implement the power set solution to compare execution times O(2^n)
export function set_cover_power_set(sets: Record<string, Set<string>>) {
  // 1. build the power set
  // 2. build this structure [ {sets_values:[],sets_keys:Set<string>} ]
}
