---
title: Manhattan Distance (MD)
space: 300
---

Instead, we can sum the Manhattan distances of each tile from its current position to its solved position. This is effectively a lower bound on the minimum moves needed to solve each tile individually.

Calculating MD can be done easily in $O(n)$ time. We can do one step better and notice that the MD of a board changes by 1 with any tile slide. Using the previous MD value and the following tile slide, we can calculate the new MD in $O(1)$ instead.

MD performs better than the previous heuristic, and is enough to solve all 8 Puzzle instances in a reasonable amount of time.

However, we're still far from a perfect heuristic. The main issue with Manhattan distance is that it doesn't take into account the interactions between tiles. It assumes each tile can move independently from the others, resulting in a very low bound.

We can improve it by incorporating more of the board in the heuristic, and one way to do it is using linear conflicts.
