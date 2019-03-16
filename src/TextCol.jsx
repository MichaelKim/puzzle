// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import Board from 'Board.jsx';

const S = {
  TextCol: styled.div`
    flex: 1;
    margin-right: 50px;
    max-width: calc(50% - 50px);
  `
};

class Block extends React.Component<{|
  +space: number,
  +title: string,
  +children: React.Node,
  +onEnter: () => void
|}> {
  render() {
    return (
      <div>
        <div style={{ height: this.props.space }} />
        <Waypoint onEnter={this.props.onEnter} bottomOffset="50%" />
        {this.props.title ? <h1>{this.props.title}</h1> : null}
        {this.props.children}
      </div>
    );
  }
}

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
          Explore the various methods used to solve this puzzle in the{' '}
          <i>fewest</i> moves possible in this interactive visualization.
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
          The board shown on the right is <i>interactive!</i> Move the tiles by
          clicking on them or using the WASD keys on your keyboard.
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
        </p>
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
          <Block
            space={block.space}
            title={block.title}
            onEnter={() => this.props.onEnter(i)}
            key={i}
          >
            {block.body}
          </Block>
        ))}
      </S.TextCol>
    );
  }
}

export default TextCol;
