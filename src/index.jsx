// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import TextCol from './TextCol.jsx';
import BoardCol from './BoardCol.jsx';

import './favicon.png';
import 'katex/dist/katex.min.css';
import './fonts/open-sans-700.woff';
import './fonts/open-sans-700.woff2';
import './fonts/open-sans-regular.woff';
import './fonts/open-sans-regular.woff2';

const Root = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <S.Root>
      <S.Global />
      <S.Container>
        <TextCol onEnter={setIndex} />
        <BoardCol index={index} />
      </S.Container>
    </S.Root>
  );
};

const S = {
  Global: createGlobalStyle`
    body {
      background-color: #fffafa;
      margin: 0;
    }

    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Open Sans Regular'), local('OpenSans-Regular'),
          url('../fonts/open-sans-regular.woff2') format('woff2'),
          url('../fonts/open-sans-regular.woff') format('woff');
    }

    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      src: local('Open Sans Bold'), local('OpenSans-Bold'),
          url('../fonts/open-sans-700.woff2') format('woff2'),
          url('../fonts/open-sans-700.woff') format('woff');
    }
  `,
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

    pre,
    code {
      font-family: monospace;
    }

    h1 {
      font-size: 50px;
      margin: 0;
    }

    h2 {
      font-size: 35px;
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

const root = document.getElementById('root');
if (root) {
  render(<Root />, root);
}
