// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import Board from './Board.jsx';

type Props = {|
  +index: number
|};

const WIDTHS = [4, 4, 3, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
const HEIGHTS = [4, 4, 3, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

const BoardCol = ({ index }: Props) => {
  const width = WIDTHS[index];
  const height = HEIGHTS[index];

  return (
    <S.BoardCol>
      <S.Sticky>
        <Board width={width} height={height} />
        <S.Controls style={{ opacity: index === 1 ? 1 : 0 }}>
          <button>Solve</button>
          <button>Scramble</button>
        </S.Controls>
      </S.Sticky>
    </S.BoardCol>
  );
};

const S = {
  BoardCol: styled.div`
    flex: 1;
    margin-left: 50px;
  `,
  Sticky: styled.div`
    position: sticky;
    top: calc(50% - 200px);
  `,
  Controls: styled.div`
    transition: opacity 0.5s;
  `
};

export default BoardCol;
