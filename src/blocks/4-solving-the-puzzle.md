---
title: Solving the Puzzle
space: 300
---

In computer science, one method of solving problems involve representing them other problems that we already know how to solve. [^][[Formally, these transformations are called [**reductions**](<https://en.wikipedia.org/wiki/Reduction_(complexity)>). In this case, the problem of finding the shortest solution can be **reduced** into a different problem.]] We're going to do the same with the 15 Puzzle.

To help perform the conversion, there's two things to note about the puzzle:

1. Each move can be undone by performing its inverse. For example, sliding a tile down into the blank then sliding it up will bring us back to where we were before.
2. All moves are equally important. That is, the length of the solution is simply the number of moves needed. No single move will "cost" more to use than any other.

With those two points in mind, we're ready to make the jump into graphs.
