// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';

import InlineMath from 'InlineMath.jsx';

function BlockMath(props: {| +text: string |}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InlineMath text={props.text} />
    </div>
  );
}

export default BlockMath;
