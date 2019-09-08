// @flow strict

import * as React from 'react';

// Import all markdown files
import * as Page1 from './1-start.md';
import * as Page2 from './2-help.md';
import * as Page3 from './3-the-puzzle.md';
import * as Page4 from './4-solving-the-puzzle.md';
import * as Page5 from './5-graphs.md';
import * as Page6 from './6-a-search.md';
import * as Page7 from './7-heuristics.md';
import * as Page8 from './8-summary.md';
import * as Page9 from './9-applying-heuristics.md';
import * as Page10 from './10-misplaced-tiles.md';
import * as Page11 from './11-manhattan-distance.md';
import * as Page12 from './12-linear-conflicts.md';
import * as Page13 from './13-inversion-distance.md';
import * as Page14 from './14-walking-distance.md';

const pages = [
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page10,
  Page11,
  Page12,
  Page13,
  Page14
];

const blocks: Array<{|
  +title: string,
  +space: number,
  +body: React.Node
|}> = pages.map(({ default: Page, frontMatter }) => ({
  title: frontMatter.title,
  space: frontMatter.space,
  body: <Page />
}));

export default blocks;
