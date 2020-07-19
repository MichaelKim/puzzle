---
title: Graphs
space: 300
---

Let's call an instance of the puzzle _a board state_. We can represent these board states as nodes in a graph, where edges connect boards that can be turned into each other by sliding a tile. Based on the two points mentioned above, we know that the graph will be undirected and unweighted.

Then, finding the shortest solution to a board state is equivalent to _finding the shortest path_ in the graph between the current state to the solved board state. This connection is rather helpful as the shortest path problem is an extremely well-known and well-studied problem with many ways of solving it.

For an undirected, unweighted graph such as ours, a simple **Breadth First Search** can get the job done. To speed things up, We could even use a bi-directional search, simultaneously searching from the start and end nodes. But we can do much better.

The issue with **BFS** is that the search lacks information. Essentially, it brute forces through the nodes, trying all nodes at a certain depth before going deeper, until it happens to stumble upon the goal. [^][[**Dijkstra**'s Algorithm is another well known search algorithm, but it is also uninformed. In fact, BFS is a special case of Dijkstra, where the edges in the graph are unweighted.]]

However, there's information in the board that can help point the search in the right direction. For example, it's clear that some board states are similar to each other than others based on the positions of the tiles. We could use the tiles to make an educated guess as to what the shortest path will be like.
