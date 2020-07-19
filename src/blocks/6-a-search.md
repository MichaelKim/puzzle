---
title: A* Search
space: 300
---

Let's assume we had some magical function that takes in a node as input and estimates the length of the shortest path to some goal node. We'll call this function the **heuristic**.

A common pathfinding algorithm is **A\***. Unlike BFS, A\* is informed as it uses a heuristic to help guide the search. At each step of the search, A\* will try to estimate the length of the shortest path based on how far it has currently travelled, and how much further away it thinks the goal is. Mathematically, we can write this as:

$$f(n) = g(n) + h(n)$$

Here, $n$ is the next node in the path, $g(n)$ is the distance from the start to $n$, and $h(n)$ is the result from the magical heuristic function. A\* will pick the next node with the smallest $f(n)$ that it hasn't already checked to continue searching through.

Note that if $h(n) = 0$ for all nodes, A\* will perform exactly the same as BFS! [^][[This is only true for unweighted graphs. In general, A\* without a heuristic is the same as Dijkstra.]]

As long as the heuristic _never overestimates_ the actual cost, then A\* will produce an optimal solution. [^][[Since there are a finite number of unique board states, A\* will eventually find the goal since it never checks a node twice. Once it does, the actual cost of the path would be $g(n)$ of the goal node. Assuming there is more than one path to the goal, the path that A\* finds first is one with the smallest $f(n)$. Otherwise, it would have chosen another node to search through. If the heuristic _never overestimates_, A\* will never reach the goal node through a non-optimal path.]] Remember this property; we'll need it for later.
