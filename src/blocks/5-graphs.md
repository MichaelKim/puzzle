---
title: Graphs
space: 300
---

We can represent each board state as a node in a graph, where edges connect boards that can be turned into each other by sliding a tile. Notice how the graph must be undirected and unweighted due to the two points mentioned above.

Then, finding the shortest solution to a board is equivalent to _finding the shortest path_ in the graph to the solved board state. This is helpful as the shortest path problem is an extremely well-known and well-studied problem with several algorithms available.

For an undirected, unweighted graph, a simple **Breadth First Search** can get the job done. To speed things up, We could even use a bi-directional search, simultaneously searching from the start and end nodes. But we can do much better.

The issue with **BFS** is that the search lacks information. Essentially, it brute forces through the nodes, trying all nodes at a certain depth before going deeper, until it happens to stumble upon the goal. [^][[**Dijkstra** is another well known search algorithm, but it is also uninformed. In fact, BFS is a special case of Dijkstra, where the edges in the graph are unweighted.]]

However, there's information in the board that can point the search in a right direction. For example, it's clear that some boards are similar to each other than others. We could use the board to make an educated guess as to what the shortest path will be like.
