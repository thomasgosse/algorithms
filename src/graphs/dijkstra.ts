import { construct_shortest_path } from "./construct-shortest-path.js";
import { WeightedGraph } from "./types.js";

function init_parents_costs(start: string, target: string, graph: WeightedGraph) {
  let parents: Record<string, string> = { [target]: undefined };
  let costs: Record<string, number> = { [start]: 0, [target]: Infinity };
  for (let child of Object.keys(graph[start])) {
    parents[child] = start;
    costs[child] = graph[start][child];
  }
  return { parents, costs };
}

function find_closest_child(children: Record<string, number>, processed: Set<string>) {
  let lowest_cost = Infinity;
  let closest_node = undefined;
  for (let child of Object.keys(children)) {
    if (!processed.has(child) && children[child] < lowest_cost) {
      lowest_cost = children[child];
      closest_node = child;
    }
  }
  return closest_node;
}

export function dijkstra(start: string, target: string, graph: WeightedGraph) {
  const processed = new Set<string>();
  let { parents, costs } = init_parents_costs(start, target, graph);
  let current = find_closest_child(costs, processed);

  while (current) {
    const children = graph[current];
    for (let child of Object.keys(children)) {
      // It means we did not encountered this child yet
      if (typeof costs[child] === "undefined") {
        costs[child] = Infinity;
      }
      const cost_to_child = graph[current][child] + costs[current];
      if (cost_to_child < costs[child]) {
        costs[child] = cost_to_child;
        parents[child] = current;
      }
    }
    processed.add(current);
    current = find_closest_child(costs, processed);
  }

  // This condition handles disconnected nodes graphs
  if (costs[target] === Infinity && start !== target) return [];
  return construct_shortest_path(start, target, parents);
}
