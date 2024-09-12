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
