// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import TextBlock from './TextBlock.jsx';
import allBlocks from './blocks/index.jsx';

const [firstBlock, ...blocks] = allBlocks;

type Props = {|
  +onEnter: (index: number) => void
|};

const TextCol = ({ onEnter }: Props) => {
  return (
    <S.TextCol>
      <S.First>
        <h2>{firstBlock.title}</h2>
        {firstBlock.body}
      </S.First>
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
  `,
  First: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
};

export default TextCol;
