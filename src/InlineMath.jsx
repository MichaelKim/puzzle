// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function InlineMath(props: {| +text: string |}) {
  return (
    <span
      style={{ fontSize: 18 }}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(props.text, {
          throwOnError: false
        })
      }}
    />
  );
}

export default InlineMath;
