// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import Board from 'Board.jsx';

const S = {
  BoardCol: styled.div`
    flex: 1;
    margin-left: 50px;
  `,
  Controls: styled.div`
    transition: opacity 0.5s;
  `
};

type Props = {|
  +index: number
|};

class BoardCol extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (prevProps.index === this.props.index) return;
    console.log(prevProps.index, this.props.index);
  }

  render() {
    const width = [4, 4, 3, 5, 4][this.props.index];
    const height = [4, 4, 3, 5, 4][this.props.index];

    return (
      <S.BoardCol>
        <div style={{ position: 'sticky', top: 125 }}>
          <Board width={width} height={height} />
          <S.Controls style={{ opacity: this.props.index == 1 ? 1 : 0 }}>
            <button>Solve</button>
            <button>Scramble</button>
          </S.Controls>
        </div>
      </S.BoardCol>
    );
  }
}

export default BoardCol;
