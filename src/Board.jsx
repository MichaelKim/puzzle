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
  +nums: number[],
  +tiles: {
    +[num: mixed]: TileType
  },
  +blank: {|
    +x: number,
    +y: number
  |}
|};

const Board = (props: Props) => {
  const [state, setState] = useTiles(props.width, props.height);

  const applyMove = (dx: number, dy: number) => {
    const nextBlank = {
      x: state.blank.x + dx,
      y: state.blank.y + dy
    };

    if (
      nextBlank.x < 0 ||
      nextBlank.x >= props.width ||
      nextBlank.y < 0 ||
      nextBlank.y >= props.height
    ) {
      return;
    }

    const nextTiles = state.tiles;
    const blankIndex = state.blank.y * props.width + state.blank.x;
    const tileIndex = blankIndex + dx + props.width * dy;
    const tileNum = state.nums[tileIndex];

    nextTiles[tileNum].x = state.blank.x;
    nextTiles[tileNum].y = state.blank.y;

    const nextNums = state.nums;
    nextNums[tileIndex] = 0;
    nextNums[blankIndex] = tileNum;

    setState({
      nums: nextNums,
      tiles: nextTiles,
      blank: nextBlank
    });
  };

  const onMove = (e: KeyboardEvent) => {
    if (e.key === 'w') {
      applyMove(0, 1);
    } else if (e.key === 'a') {
      applyMove(1, 0);
    } else if (e.key === 's') {
      applyMove(0, -1);
    } else if (e.key === 'd') {
      applyMove(-1, 0);
    }
  };

  const onClick = (x: number, y: number) => {
    const { blank } = state;
    if (blank.x === x && blank.y + 1 === y) {
      applyMove(0, 1);
    } else if (blank.x + 1 === x && blank.y === y) {
      applyMove(1, 0);
    } else if (blank.x === x && blank.y - 1 === y) {
      applyMove(0, -1);
    } else if (blank.x - 1 === x && blank.y === y) {
      applyMove(-1, 0);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keypress', onMove);

    return () => {
      document.removeEventListener('keypress', onMove);
    };
  }, [onMove]);

  return (
    <S.Board>
      {Object.keys(state.tiles).map(num => {
        const tile = state.tiles[num];
        return (
          <Tile
            key={tile.num}
            width={100 / props.width}
            height={100 / props.height}
            value={tile.num}
            x={tile.x}
            y={tile.y}
            onClick={onClick}
          />
        );
      })}
    </S.Board>
  );
};

type StateHook = [State, (State) => void];
const useTiles = (width: number, height: number): StateHook => {
  const defaultState = React.useMemo(() => {
    const length = width * height;
    // 1, 2, ..., 14, 15 (length - 1)
    const nums: Array<number> = [...Array(length - 1).keys()].map(i => i + 1);
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
      tiles,
      blank: {
        x: width - 1,
        y: height - 1
      }
    };
  }, [width, height]);

  const [state, setState] = React.useState(defaultState);
  React.useEffect(() => {
    setState(defaultState);
  }, [width, height]);

  return [state, setState];
};

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
