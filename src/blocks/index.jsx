// @flow strict

import * as React from 'react';

// Import all markdown files
import Page1 from './1-start.md';
import Page2 from './2-help.md';
import Page3 from './3-the-puzzle.md';
import Page4 from './4-solving-the-puzzle.md';
import Page5 from './5-graphs.md';
import Page6 from './6-a-search.md';
import Page7 from './7-heuristics.md';
import Page8 from './8-summary.md';
import Page9 from './9-applying-heuristics.md';
import Page10 from './10-misplaced-tiles.md';
import Page11 from './11-manhattan-distance.md';
import Page12 from './12-linear-conflicts.md';
import Page13 from './13-inversion-distance.md';
import Page14 from './14-walking-distance.md';

const pages: Array<{
  +attributes: {|
    +title: string,
    +space: number
  |},
  +html: string
}> = [
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
|}> = pages.map(p => ({
  title: p.attributes.title,
  space: p.attributes.space,
  body: <div dangerouslySetInnerHTML={{ __html: p.html }} />
}));

export default blocks;
