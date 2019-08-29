// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import TextBlock from './TextBlock.jsx';
import blocks from './blocks/index.jsx';

type Props = {|
  +onEnter: (index: number) => void
|};

const TextCol = ({ onEnter }: Props) => {
  return (
    <S.TextCol>
      {blocks.map((block, i) => (
        <TextBlock
          key={i}
          space={block.space}
          title={block.title}
          onEnter={() => onEnter(i)}
        >
          {block.body}
        </TextBlock>
      ))}
    </S.TextCol>
  );
};

const S = {
  TextCol: styled.div`
    flex: 1;
    margin-right: 50px;
    max-width: calc(50% - 50px);
  `
};

export default TextCol;
