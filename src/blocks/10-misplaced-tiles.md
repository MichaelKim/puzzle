---
title: Misplaced Tiles
space: 300
---

The simplest heuristic is to count the number of misplaced tiles. This is admissible because it doesn't count how far the tiles have to move, only the fact that they're misplaced. Because of this, it also performs horribly as the heuristic doesn't provide any information about how those tiles are misplaced, like how far a misplaced tile is from being correct.

We can do better.
