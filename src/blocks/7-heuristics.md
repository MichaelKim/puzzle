---
title: Heuristics
space: 300
---

Our magical heuristic

A **heuristic** (or heuristic function) is a function that estimates the cost or distance to the solution of a certain problem. For search problems, it uses the available information at each step to determine which path to follow during a search.

Heuristics are used in place of other methods to improve runtime. However, this often comes at a drawback, such as producing an approximate solution, or only finding one solution rather than all of them.

The best heuristics will correctly estimate the exact cost at every step. If used in a search, it will always pick the correct branch, and will never have to backtrack. But as long as the heuristic _never overestimates the cost_ of reaching the goal, it can still produce an optimal solution. Such a heuristic is called **admissible**.

For this problem, a heuristic would estimate the length of the shortest solution from a given starting board. This would provide the information needed to make an informed search, but how do we apply it?
