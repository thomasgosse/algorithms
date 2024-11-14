function hash(set: Set<string>) {
  return [...set.keys()].sort().join();
}

// @todo: clean and write tests
export function create_power_set(set: Set<string>, cache: Record<string, Set<string>> = {}): Set<Set<string>> {
  if (set.size === 0) {
    return new Set([set]);
  }

  cache[hash(set)] = set;

  set.keys().forEach((element) => {
    const subset = new Set(set);
    subset.delete(element);
    cache[hash(subset)] = set;

    create_power_set(subset, cache).forEach((subset) => {
      cache[hash(subset)] = subset;
    });
  });

  return new Set(Object.values(cache));
}
