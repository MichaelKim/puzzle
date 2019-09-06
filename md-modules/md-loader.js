import React from 'react';
import { renderToString } from 'react-dom/server';

import BlockMath from './BlockMath.jsx';
import InlineMath from './InlineMath.jsx';
// import Note from './Note.jsx';

export default function(md) {
  // function note(state) {
  //   // [x][foo bar]
  //   const match = state.src.substring(state.pos).match(/\[x\]\[([^\]]+)\]/);

  //   if (match == null) {
  //     return false;
  //   }

  //   console.log(match);
  //   console.log(state.src.substring(state.pos));

  //   let token = state.push('html_inline', '', 0);
  //   token.content = renderToString(<Note num={0}>{match[1]}</Note>);

  //   state.pos += match[0].length;

  //   return true;
  // }

  function inlinemath(state) {
    // Starting $
    if (state.src[state.pos] !== '$') {
      return false;
    }

    const idx = state.src.indexOf('$', state.pos + 1);

    // Ending $
    if (idx === -1) {
      return false;
    }

    const math = state.src.substring(state.pos + 1, idx);

    let token = state.push('html_inline', '', 0);
    token.content = renderToString(<InlineMath text={math} />);

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
    token.content = renderToString(<BlockMath text={math} />);

    return true;
  }

  md.inline.ruler.push('inline_math', inlinemath);
  // md.inline.ruler.push('note', note);
  md.block.ruler.before('paragraph', 'block_math', blockmath);
}
