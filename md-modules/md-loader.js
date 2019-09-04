'use strict';

const katex = require('katex');
const React = require('react');
const ReactDOM = require('react-dom');
const BlockMath = require('./BlockMath.jsx');

console.log(
  ReactDOM.renderToString(React.createElement(BlockMath, { text: 'a^b' }, null))
);

module.exports = function(md) {
  function inlinemath(state) {
    if (state.src[state.pos] !== '$') {
      return false;
    }

    const idx = state.src.indexOf('$', state.pos + 1);

    if (idx === -1) {
      return false;
    }

    const math = state.src.substring(state.pos + 1, idx);

    let token = state.push('html_inline', '', 0);
    token.content = `<span style='font-size: 18px;'>${katex.renderToString(
      math,
      {
        throwOnError: false
      }
    )}</span>`;

    state.pos = idx + 1;

    return true;
  }

  function blockmath(state, startLine) {
    const line = state.getLines(startLine, startLine + 1, 0, false);

    const match = line.match(/^\$\$([^$]+)\$\$\n?$/);

    if (match == null) {
      return false;
    }

    // Tokenize block math
    const math = match[1];

    state.line += 1;

    let token = state.push('html_block', '', 0);
    token.map = [startLine, state.line];
    token.content = `<div style='display: flex; justify-content: center;'>${katex.renderToString(
      math,
      {
        throwOnError: false
      }
    )}</div>`;

    return true;
  }

  md.inline.ruler.push('inline_math', inlinemath);
  md.block.ruler.before('paragraph', 'block_math', blockmath);
};
