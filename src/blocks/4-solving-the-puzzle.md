---
title: Solving the Puzzle
space: 300
---

In Computer Science, problems are often solved by representing them as a different problem, of which there are known solutions for. [x][formally, these transformations are called **reductions**. in this case, the problem of finding the shortest solution can be **reduced** into a different problem.] We're going to do the same with the 15 Puzzle.

To help make the conversion, there's two things to note about the puzzle:

1. Each move can be undone by performing its inverse. For example, sliding a tile down into the blank and sliding a tile up will bring us back to the same puzzle state.
2. All moves are equally important. That is, the length of the solution is simply the number of moves needed. No one move will "cost" more to use than any other.

With those two points in mind, we're ready to make the jump into graphs.
