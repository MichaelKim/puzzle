---
title: Summary
space: 300
---

In order to find the shortest solution, we can transform the puzzle into a pathfinding problem through an undirected, unweighted graph.

To speed up the search, we can use an informed search algorithm such as A\*, which employs the use of a heuristic function.

Any admissible heuristic will yield the shortest solution, but a good one will be fast to calculate and converge to the goal faster.
