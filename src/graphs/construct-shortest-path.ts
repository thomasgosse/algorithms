export function construct_shortest_path(start: string, target: string, map: Record<string, string>): string[] {
  let path = [target];
  let current = target;
  while (current !== start) {
    current = map[current];
    path.push(current);
  }
  return path.reverse();
}
