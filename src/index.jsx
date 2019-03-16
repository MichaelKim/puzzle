// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import TextCol from 'TextCol.jsx';
import BoardCol from 'BoardCol.jsx';

const S = {
  Root: styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    * {
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Roboto, Arial,
        sans-serif;
    }

    h1 {
      font-size: 50px;
      margin: 0;
    }

    p {
      font-size: 20px;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px;
  `
};

class Root extends React.Component<
  {||},
  {|
    +currIndex: number
  |}
> {
  state = {
    currIndex: 0
  };

  _onEnter = (index: number) => {
    this.setState({ currIndex: index });
  };

  render() {
    return (
      <S.Root>
        <S.Container>
          <TextCol onEnter={this._onEnter} />
          <BoardCol index={this.state.currIndex} />
        </S.Container>
      </S.Root>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  render(<Root />, root);
}
