// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Tile from './Tile.jsx';

type Props = {|
  +width: number,
  +height: number
|};

const useTiles = (width: number, height: number) => {
  const initialState = React.useMemo(() => {
    const arr = [...Array(width * height - 1).keys()];
    const places: number[] = [width * height - 1].concat(arr);
    const values: number[] = arr.map(i => i + 1).concat(0);

    return {
      places,
      values
    };
  }, [width, height]);

  const [tiles, setTiles] = React.useState(initialState);
  React.useEffect(() => {
    setTiles(initialState);
  }, [initialState]);

  const applyMove = React.useCallback(
    (dx: number, dy: number) => {
      setTiles(tiles => {
        const newX = (tiles.places[0] % width) + dx;
        const newY = Math.floor(tiles.places[0] / width) + dy;

        if (newX < 0 || newX >= width || newY < 0 || newY >= height) {
          return tiles;
        }

        const { places, values } = tiles;
        // Perform slide
        const tile = values[newY * width + newX];

        // Swap values
        values[places[0]] = values[places[tile]];
        values[places[tile]] = 0;

        // Swap places
        const temp = places[0];
        places[0] = places[tile];
        places[tile] = temp;

        return {
          places,
          values
        };
      });
    },
    [width, height]
  );

  return [tiles, applyMove];
};

const Board = ({ width, height }: Props) => {
  const [tiles, applyMove] = useTiles(width, height);
  const [blank, ...places] = tiles.places;

  const onClick = (x: number, y: number) => {
    const dx = (blank % width) - x;
    const dy = Math.floor(blank / width) - y;
    if (Math.abs(dx) + Math.abs(dy) === 1) {
      applyMove(dx, dy);
    }
  };

  React.useEffect(() => {
    const onMove = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
          applyMove(0, 1);
          break;
        case 'a':
          applyMove(1, 0);
          break;
        case 's':
          applyMove(0, -1);
          break;
        case 'd':
          applyMove(-1, 0);
          break;
      }
    };

    document.addEventListener('keypress', onMove);

    return () => {
      document.removeEventListener('keypress', onMove);
    };
  }, [applyMove]);

  return (
    <S.Board>
      {places.map((posn, i) => (
        <Tile
          key={i}
          width={100 / width}
          height={100 / height}
          value={i + 1}
          x={posn % width}
          y={Math.floor(posn / width)}
          onClick={onClick}
        />
      ))}
    </S.Board>
  );
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
