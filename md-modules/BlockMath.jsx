// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import 'katex/dist/katex.min.css';

import InlineMath from './InlineMath.jsx';

type Props = {|
  +text: string
|};

const BlockMath = (props: Props) => {
  return (
    <S.Root>
      <InlineMath text={props.text} />
    </S.Root>
  );
};

const S = {
  Root: styled.div`
    display: flex;
    justify-content: center;
  `
};

export default BlockMath;
