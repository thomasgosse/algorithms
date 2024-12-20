function hash(set: Set<string>) {
  return [...set.keys()].sort().join();
}

export function create_power_set(set: Set<string>, unique_subsets: Record<string, Set<string>> = {}): Set<Set<string>> {
  unique_subsets[hash(set)] = set;

  if (set.size === 0) return new Set([set]);

  set.keys().forEach((element) => {
    const subset = new Set(set);
    subset.delete(element);
    create_power_set(subset, unique_subsets);
  });

  return new Set(Object.values(unique_subsets));
}
