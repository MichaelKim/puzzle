---
title: Manhattan Distance
space: 300
---

Instead, we can sum the **Manhattan distances** [^][[Also called the taxicab metric or the $l_1$ norm, the Manhattan distance is the sum of the absolute differences of each coordinate, i.e., $|x_2 - x_1| + |y_2 - y_1|$.]] of each tile from its current position to its solved position. We can imagine this as sliding each tile individually to their solved positions, without being blocked by others.

Calculating MD can be done easily in $O(n)$ [^][[This is [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation), which describes how run time grows with input size. $O(n)$ means the time it takes to calculate MD is proportional to the number of tiles.]] time, where $n$ is the number of tiles. We can do one step better and notice that the MD of a board changes by 1 with any tile slide. Using the previous MD value and the following tile slide, we can calculate the new MD in $O(1)$ time instead.

MD performs better than the previous heuristic, and is enough to solve even the hardest 8 Puzzle instances in a reasonable amount of time.

However, we're still far from a perfect heuristic. The main issue with Manhattan distance is that it doesn't take into account the interactions between tiles. It assumes each tile can move independently from the others, resulting in a very low bound.

We can improve it by incorporating more of the board in the heuristic, and one way to do it is using linear conflicts.
