// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

type Props = {|
  +x: number,
  +y: number,
  +value: mixed, // Anything that could be displayed
  +width: number,
  +height: number,
  +onClick: (x: number, y: number) => void
|};

type State = {||};

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
    position: relative;
    top: -50%;
    left: -50%;
  `
};

class Tile extends React.Component<Props, State> {
  _onClick = () => {
    this.props.onClick(this.props.x, this.props.y);
  };

  render() {
    const { width, height, value, x, y } = this.props;

    return (
      <S.Tile
        onClick={this._onClick}
        style={{
          width: width + '%',
          height: height + '%',
          left: (x + 0.5) * width + '%',
          top: (y + 0.5) * height + '%'
        }}
      >
        <S.Inner>{value}</S.Inner>
      </S.Tile>
    );
  }
}

export default Tile;
