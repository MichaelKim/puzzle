// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Tile from './Tile.jsx';

type TileType = {|
  num: number,
  x: number,
  y: number
|};

type Props = {|
  +width: number,
  +height: number
|};

type State = {|
  nums: number[],
  tiles: {
    [num: mixed]: TileType
  },
  blank: {
    x: number,
    y: number
  }
|};

class Board extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this._createState(props.width, props.height);
  }

  componentDidMount() {
    document.addEventListener('keypress', this._onMove);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this._onMove);
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.width === this.props.width &&
      prevProps.height === this.props.height
    ) {
      return;
    }

    this.setState(this._createState(this.props.width, this.props.height));
  }

  _createState = (width: number, height: number) => {
    const length = width * height;
    // 1, 2, ..., 14, 15 (length - 1)
    const nums: number[] = [...Array(length - 1).keys()].map(i => i + 1);
    const tiles = nums.reduce(
      (acc, n) => ({
        ...acc,
        [n]: {
          num: n,
          x: (n - 1) % width,
          y: 0 | ((n - 1) / width)
        }
      }),
      {}
    );

    return {
      nums: [...nums, 0],
      tiles: tiles,
      blank: {
        x: width - 1,
        y: height - 1
      }
    };
  };

  _applyMove = (dx: number, dy: number) => {
    this.setState((prevState, props) => {
      const nextBlank = {
        x: prevState.blank.x + dx,
        y: prevState.blank.y + dy
      };

      if (
        nextBlank.x < 0 ||
        nextBlank.x >= props.width ||
        nextBlank.y < 0 ||
        nextBlank.y >= props.height
      ) {
        return;
      }

      const nextTiles = prevState.tiles;
      const blankIndex = prevState.blank.y * props.width + prevState.blank.x;
      const tileIndex = blankIndex + dx + props.width * dy;
      const tileNum = prevState.nums[tileIndex];

      nextTiles[tileNum].x = prevState.blank.x;
      nextTiles[tileNum].y = prevState.blank.y;

      const nextNums = prevState.nums;
      nextNums[tileIndex] = 0;
      nextNums[blankIndex] = tileNum;

      return {
        nums: nextNums,
        tiles: nextTiles,
        blank: nextBlank
      };
    });
  };

  _onMove = (e: KeyboardEvent) => {
    if (e.key === 'w') {
      this._applyMove(0, 1);
    } else if (e.key === 'a') {
      this._applyMove(1, 0);
    } else if (e.key === 's') {
      this._applyMove(0, -1);
    } else if (e.key === 'd') {
      this._applyMove(-1, 0);
    }
  };

  _onClick = (x: number, y: number) => {
    const { blank } = this.state;
    if (blank.x === x && blank.y + 1 === y) {
      this._applyMove(0, 1);
    } else if (blank.x + 1 === x && blank.y === y) {
      this._applyMove(1, 0);
    } else if (blank.x === x && blank.y - 1 === y) {
      this._applyMove(0, -1);
    } else if (blank.x - 1 === x && blank.y === y) {
      this._applyMove(-1, 0);
    }
  };

  render() {
    const { width, height } = this.props;

    return (
      <S.Board>
        {Object.keys(this.state.tiles).map(num => {
          const tile = this.state.tiles[num];
          return (
            <Tile
              key={tile.num}
              width={100 / width}
              height={100 / height}
              value={tile.num}
              x={tile.x}
              y={tile.y}
              onClick={this._onClick}
            />
          );
        })}
      </S.Board>
    );
  }
}

const S = {
  Board: styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    border: 2px solid black;
    border-radius: 6px;
    user-select: none;
    background-color: white;
  `
};

export default Board;
