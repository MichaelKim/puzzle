// @flow strict

import * as React from 'react';
import katex from 'katex';
// import 'katex/dist/katex.min.css';

type Props = {|
  +text: string
|};

const InlineMath = ({ text }: Props) => {
  return (
    <span
      style={{ fontSize: 18 }}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(text, {
          throwOnError: false
        })
      }}
    />
  );
};

export default InlineMath;
