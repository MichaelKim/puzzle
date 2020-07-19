// @flow strict

import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  +num: number,
  +children: React.Node
|};

type State = {|
  visible: boolean
|};

class Note extends React.Component<Props, State> {
  state = {
    visible: false
  };
  ref = React.createRef<HTMLDivElement>();

  onClick = (e: MouseEvent) => {
    if (e.target === this.ref.current) {
      this.setState(({ visible }) => ({ visible: !visible }));
    }
  };

  outsideClick = (e: MouseEvent) => {
    if (
      this.ref.current == null ||
      (e.target instanceof Node && this.ref.current.contains(e.target))
    ) {
      return;
    }
    this.setState({ visible: false });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.outsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.outsideClick);
  }

  render() {
    return (
      <S.Box onClick={this.onClick} ref={this.ref}>
        [{this.props.num}]
        <S.Note style={{ display: this.state.visible ? 'block' : 'none' }}>
          {this.props.children}
        </S.Note>
      </S.Box>
    );
  }
}

const S = {
  Box: styled.span`
    position: relative;
    vertical-align: super;
    font-size: 12px;
    color: blue;
    cursor: pointer;
  `,
  Note: styled.span`
    position: absolute;
    color: black;
    background-color: white;
    font-size: 16px;
    width: 300px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
    cursor: auto;
    z-index: 1;
  `
};

export default Note;
