---
title: A* Search
space: 300
---

Let's assume we had some magical function $h(n)$ that takes in a node $n$ as input and estimates the length of the shortest path to an end node. We'll call this function the **heuristic** for now.

A common pathfinding algorithm is **A\***. Unlike BFS, A\* is informed as it uses a heuristic which estimates the minimum cost to the end state. At each step of the search, A\* select the path with the minimum value of $f(n)$.

$$f(n) = g(n) + h(n)$$

Here, $n$ is the next node in the path, $g(n)$ is the distance from the start to $n$, and $h(n)$ is the result from the magical heuristic function.

Note that if $h(n) = 0$ for all nodes, A\* will perform exactly the same as BFS! [^][[This is only true for unweighted graphs. In general, A\* without a heuristic is the same as Dijkstra.]]

As long as the heuristic _never overestimates_ the cost, A\* will produce an optimal solution.
