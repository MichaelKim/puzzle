// @flow strict

import * as React from 'react';
import { render } from 'react-dom';
import { Waypoint } from 'react-waypoint';

class TextBlock extends React.Component<{|
  +space: number,
  +title: string,
  +children: React.Node,
  +onEnter: () => void
|}> {
  render() {
    return (
      <div>
        <div style={{ height: this.props.space }} />
        <Waypoint onEnter={this.props.onEnter} bottomOffset="50%" />
        {this.props.title ? <h2>{this.props.title}</h2> : null}
        {this.props.children}
      </div>
    );
  }
}

export default TextBlock;
