// @flow strict

import * as React from 'react';
import { Waypoint } from 'react-waypoint';

type Props = {|
  +space: number,
  +title: string,
  +children: React.Node,
  +onEnter: () => void
|};

const TextBlock = (props: Props) => {
  return (
    <>
      <div style={{ height: props.space }} />
      <Waypoint onEnter={props.onEnter} bottomOffset='50%' />
      {props.title && <h2>{props.title}</h2>}
      {props.children}
    </>
  );
};

export default TextBlock;
