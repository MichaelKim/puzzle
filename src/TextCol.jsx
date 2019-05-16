// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import Board from 'Board.jsx';
import Note from 'Note.jsx';
import Math from 'InlineMath.jsx';
import BlockMath from 'BlockMath.jsx';
import TextBlock from 'TextBlock.jsx';

const S = {
  TextCol: styled.div`
    flex: 1;
    margin-right: 50px;
    max-width: calc(50% - 50px);
  `
};

const blocks = [
  {
    space: 100,
    title: '',
    body: (
      <>
        <h1>The 15 Puzzle</h1>
        <p>
          The 15 Puzzle is a sliding puzzle consisting of 15 square tiles
          numbered from 1 to 15 placed on a 4x4 grid, with one tile missing.
        </p>
        <p>
          The goal is to slide the tiles into the blank to bring the board to
          its solved state, shown on the right.
        </p>
        <p>
          Despite its simplicity, this century-old puzzle has modern
          applications in computer science, specifically in modelling heuristic
          algorithms.
        </p>
        <p>
          Keep scrolling! We'll explore the various methods used to solve this
          puzzle in the <i>fewest</i> moves possible.
        </p>
      </>
    )
  },
  {
    space: 300,
    title: '',
    body: (
      <>
        <p>
          This guide doesn't require any prior knowledge of algorithms, but will
          make references to data structures and a little bit of graph theory.
        </p>
        <p>
          Also, the board shown on the right is <i>interactive!</i> Move the
          tiles by clicking on them or using the WASD keys on your keyboard.
        </p>
      </>
    )
  },
  {
    space: 300,
    title: 'Introduction',
    body: (
      <>
        <p>
          The 15 Puzzle is the grid on the right. It consists of 15 square tiles
          numbered from 1 to 15, placed on a 4x4 grid, with one tile missing in
          the corner.
        </p>
        <p>
          Initially, the tiles in the board will be scrambled up, completely out
          of order. The goal is to slide the tiles into the blank to bring the
          board back to its solved state.
        </p>
      </>
    )
  },
  {
    space: 300,
    title: 'Graphs',
    body: (
      <>
        <p>
          We can represent each board state as a node in a graph, where edges
          connect boards that can be turned into each other by sliding a tile.
          Each edge is undirected and has the same weight, reflecting how a tile
          slide can be undone by moving the tile back.
        </p>
        <p>
          Then, finding the optimal solution to a board is equivalent to{' '}
          <i>finding the shortest path to the solved board state</i>.
        </p>
        <p>
          For an undirected, unweighted graph, a simple{' '}
          <b>Breadth First Search</b> can get the job done. We could even use a
          bi-directional search, simultaneously searching from the start and end
          nodes, to optimize runtime. But we can do much better.
        </p>
        <p>
          The issue with <b>BFS</b> is that the search lacks information.
          Essentially, it brute forces through the nodes, testing all nodes at a
          certain depth before going deeper, until it happens to find the goal.
          There's information hidden in the board that can point the search in a
          right direction.
          <Note num={1}>
            Dijkstra is another well known search algorithm, but it is also
            uninformed. In fact, BFS is a special case of Dijkstra, where the
            edges are unweighted.
          </Note>
        </p>
      </>
    )
  },
  {
    space: 300,
    title: 'Heuristics',
    body: (
      <>
        <p>
          A <b>heuristic</b> (or heuristic function) is a function that
          estimates the cost or distance to the solution of a certain problem.
          For search problems, it uses the available information at each step to
          determine which path to follow during a search.
        </p>
        <p>
          Heuristics are used in place of other methods for improved runtime.
          However, this often comes at a drawback, such as producing an
          approximate solution, or only finding one solution out of many.
        </p>
        <p>
          The best heuristics will correctly estimate the exact cost at every
          step. If used in a search, it will always pick the correct branch, and
          will never have to backtrack. But as long as the heuristic{' '}
          <i>never overestimates the cost</i> of reaching the goal, it can still
          produce an optimal solution. Such a heuristic is called{' '}
          <b>admissible</b>.
        </p>
      </>
    )
  },
  {
    space: 300,
    title: 'Pathfinding',
    body: (
      <>
        <p>
          A common pathfinding algorithm is <b>A*</b>. Unlike BFS, A* is
          informed as it uses a heuristic which estimates the minimum cost to
          the end state. At each step of the search, A* select the path with the
          minimum value of <Math text="f(n)" />:
        </p>
        <BlockMath text="f(n) = g(n) + h(n)" />
        <p>
          Here, <Math text="n" /> is the next node in the path,{' '}
          <Math text="g(n)" /> is the distance from the start to{' '}
          <Math text="n" />, and <Math text="h(n)" /> is the cost from{' '}
          <Math text="n" /> to the end calculated using a heuristic.
        </p>
        <p>
          See how A* incorporates information of a board state to estimate the
          actual cost.
        </p>
      </>
    )
  },
  {
    space: 300,
    title: 'Hello world',
    body: (
      <>
        <p>Hello world</p>
      </>
    )
  }
];

class TextCol extends React.Component<{|
  +onEnter: (index: number) => void
|}> {
  render() {
    return (
      <S.TextCol>
        {blocks.map((block, i) => (
          <TextBlock
            space={block.space}
            title={block.title}
            onEnter={() => this.props.onEnter(i)}
            key={i}
          >
            {block.body}
          </TextBlock>
        ))}
      </S.TextCol>
    );
  }
}

export default TextCol;