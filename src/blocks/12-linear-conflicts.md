---
title: MD + Linear Conflicts (LD)
space: 300
---

Consider two tiles that are on the same row of the board, have their goals on the same row, and be placed in the wrong order.

Somewhere along the solution, these two tiles will eventually have to pass each other. Since one of the tiles needs to move out of the way for the other to pass, this situation requires more moves than MD would suggest. A minimum of two extra moves is needed to perform this shuffle, so we can add two moves for every linear conflict to our MD heuristic. [^][[Strictly speaking, the heuristic involves finding the minimum number of tiles that must be removed from the row in order to remove all linear conflicts. consider the case of the three tiles "3 1 2", where the goal state is "1 2 3". while it is possible to count two lcs (where 1 and 2 both move out of the way for 3), the minimum number is one lc, with 3 moving aside for 1 and 2. for further reading, check out the [paper](https://cse.sc.edu/~mgv/csce580sp15/gradpres/hanssonmayeryung1992.pdf) that started linear conflicts.]]

Just like the rows, this can be calculated for all columns.

What makes LC better over just MD is that MD considers each tile individually, as if all other tiles are also blank. LCs takes into account the interactions of pairs of tiles in the same row / column.

But why stop there? We can expand on conflicts to the whole board.
