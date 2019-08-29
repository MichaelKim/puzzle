---
title: Walking Distance (WD)
space: 300
---

The issue with MD is that it doesn't take into account the interactions between tiles. On the other hand, ID only considers these interactions, and doesn't care about a tile's distance to its end position. We can combine the best of both worlds to form a more informed heuristic.

Consider grouping all of the tiles in the same row together, so that we have a $1 \times 4$ column:

In our new column board, the only moves we can make consist of taking a number in a row adjacent to the row containing the blank, and swapping places with it. In the above case, we could move any tile in the 3rd row to the bottom, moving the blank tile up. The minimum number of moves needed to solve the column board is the vertical Walking Distance.

Just like MD and ID, we can calculate a horizontal Walking Distance for a "row" board, and take the sum of the horizontal and vertical components to calculate WD.

The advantage of WD is that it incorporates the MD of each tile while also considering conflicts with other tiles. One thing to note is that WD will never be less than MD, since WD is effectively MD + conflicts. This means that WD is strictly better than MD in every case!

Instead of calculating WD during the search, we can run breadth-first-search backwards from the solved state to get the WD of all possible row/column boards beforehand, and store their WD in a database. This vastly speeds up search time as finding WD takes as short as an array lookup. For the 15 Puzzle, there are 24,964 distinct boards to store, and the maximum WD value is 70. So, we could easily store each value in a byte, and our database would take up <25 KB of storage.
