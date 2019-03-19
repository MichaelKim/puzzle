// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const S = {
  Box: styled.a`
    position: relative;
    vertical-align: super;
    font-size: 12px;
    color: blue;
    cursor: pointer;
  `,
  Note: styled.span`
    position: absolute;
    color: black;
    font-size: 16px;
    width: 300px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
  `
};

class Note extends React.Component<
  {|
    +num: number,
    +children: React.Node
  |},
  {| +visible: boolean |}
> {
  state = {
    visible: false
  };

  _onClick = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    return (
      <S.Box onClick={this._onClick}>
        [{this.props.num}]
        <S.Note style={{ display: this.state.visible ? 'block' : 'none' }}>
          {this.props.children}
        </S.Note>
      </S.Box>
    );
  }
}

export default Note;
