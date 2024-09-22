export function bfs(start: string, graph: Record<string, string[]>): string[] {
  let visited = new Set([start]);
  if (!graph[start].length) return Array.from(visited);

  let queue = [...graph[start]];

  while (queue.length) {
    const neighbor = queue.shift();
    if (!visited.has(neighbor)) {
      visited.add(neighbor);

      queue = queue.concat(graph[neighbor]);
    }
  }
  return Array.from(visited);
}

function add_relation(parent: string, children: string[], map: Record<string, string> = {}) {
  children.forEach((child) => (map[child] = parent));
  return map;
}

function construct_shortest_path(start: string, target: string, map: Record<string, string>): string[] {
  let path = [target];
  let current = target;
  while (current !== start) {
    current = map[current];
    path.push(current);
  }
  return path.reverse();
}

/**
 * The map for storing the child-to-parent relationship is preferable because it simplifies and optimizes the reconstruction of the shortest path.
 * In BFS, once a node is visited, it is guaranteed to be reached via the shortest path due to the nature of the algorithm
 * (breadth-first search explores nodes level by level). Therefore, we will not encounter duplicate entries for any child node in the map,
 * which ensures that the structure remains valid and efficient for path reconstruction.
 */
export function bfs_shortest_path(start: string, target: string, graph: Record<string, string[]>): string[] | null {
  let visited = new Set([start]);
  const first_children = graph[start];
  if (!first_children.length) return null;

  let queue = [...first_children];
  let child_to_parent = add_relation(start, first_children);

  while (queue.length) {
    const neighbor = queue.shift();
    if (!visited.has(neighbor)) {
      visited.add(neighbor);

      const children = graph[neighbor];
      queue = queue.concat(children);
      child_to_parent = add_relation(neighbor, children, child_to_parent);
      if (children.includes(target)) return construct_shortest_path(start, target, child_to_parent);
    }
  }
  return null;
}
