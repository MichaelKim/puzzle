// @flow strict

import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  +x: number,
  +y: number,
  +value: mixed, // Anything that could be displayed
  +width: number,
  +height: number,
  +onClick: (x: number, y: number) => void
|};

const Tile = ({ x, y, value, width, height, onClick }: Props) => {
  const _onClick = () => onClick(x, y);

  return (
    <S.Tile
      onClick={_onClick}
      style={{
        width: width + '%',
        height: height + '%',
        left: x * width + '%',
        top: y * height + '%'
      }}
    >
      <S.Inner>{value}</S.Inner>
    </S.Tile>
  );
};

const S = {
  Tile: styled.div`
    position: absolute;
    transition: width 0.2s ease 0.2s, height 0.2s ease 0.2s, top 0.2s ease,
      left 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Inner: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    border: 1px solid black;
    font-size: 40px;
    border-radius: 10%;
  `
};

export default Tile;
