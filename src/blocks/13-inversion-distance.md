---
title: Inversion Distance (ID)
space: 300
---

The following two heuristics (Inversion Distance and Walking Distance) were both developed by Ken'ichiro Takahashi (takaken). [^][[You can read his description of them on [his website](http://www.ic-net.or.jp/home/takaken/nt/slide/solve15.html) (in Japanese). There's also a rough translation in English available [here](https://web.archive.org/web/20141224035932/http://juropollo.xe0.ru:80/stp_wd_translation_en.htm).]]

Let's first unraveling the board into a single row of tiles (going left-to-right, top-to-bottom):

Like what we did with LCs, we define an inversion to be when a tile appears before another tile with a smaller number. The blank has no number, and cannot contribute to inversions.

The number of inversions have some interesting properties:

Sliding a tile horizontally doesn't affect the total number of inversions. This is because none of the tiles switch places in their single-row representation.

Sliding a tile vertically can change the number by exactly +3, +1, -1, or -3. [^][[In general for an $m \times n$ board, the possible changes are +$m$, +1, -1, and -$m$.]]

Since one vertical move can fix up to three inversions, a lower bound on the number of vertical moves needed to fix the inversions is `floor(# of inversions / 3)`. If there is a remainder, the remaining inversions can be solved with at least one vertical move per remaining inversion. This leads to a lower bound on the number of vertical moves required:

`vertical = invcount / 3 + invcount % 3`

We can do the same for horizontal moves. However, the ordering is now top-to-bottom, left-to-right: [^][[We need to compare the tiles correctly, as ordering by the tile numbers won't be enough. Instead, we need to compare the tiles by the location of their correct position. For the vertical inversions, that ordering happened to be the same as the ordering of the tile numbers.]]

Since the vertical moves and horizontal moves are mutually exclusive, we can sum the two lower bounds to finish our heuristic.

Note that the change in inversions from a single move can be determined using only the skipped row / column, instead of the entire board. This can be used to efficiently calculate a board's ID after a move is applied (a speedup by a factor of the size of the puzzle).
