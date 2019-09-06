// @flow strict

import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  +num: number,
  +children: React.Node
|};

const Note = (props: Props) => {
  const [visible, setVisible] = React.useState(false);

  const onClick = () => setVisible(!visible);

  return (
    <S.Box onClick={onClick}>
      [{props.num}]
      <S.Note style={{ display: visible ? 'block' : 'none' }}>
        {props.children}
      </S.Note>
    </S.Box>
  );
};

const S = {
  Box: styled.a`
    position: relative;
    vertical-align: super;
    font-size: 12px;
    color: blue;
    cursor: pointer;
  `,
  Note: styled.span`
    position: absolute;
    color: black;
    font-size: 16px;
    width: 300px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
  `
};

export default Note;
