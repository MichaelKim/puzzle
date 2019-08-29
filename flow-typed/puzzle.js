// @flow strict

declare module 'react-markdown' {
  declare type ReactMarkdownProps = {|
    +source: string
  |};
  declare export default function ReactMarkdown(
    props: ReactMarkdownProps
  ): React.Node;
}

declare module 'front-matter' {
  declare export default function fm<T: {}>(
    data: string
  ): {|
    +attributes: T,
    +body: string
  |};
}

declare module 'react-waypoint' {
  declare type WaypointProps = {|
    +onEnter: () => mixed,
    +bottomOffset: string
  |};

  declare export function Waypoint(props: WaypointProps): React.Node;
}

declare module 'katex' {
  declare export default {
    renderToString: (text: string, opts: Object) => string
  };
}

declare module 'styled-components' {
  declare type BuiltinElementInstances = {
    a: React$ElementRef<'a'>,
    div: React$ElementRef<'div'>,
    span: React$ElementRef<'span'>
  };

  declare export default $ObjMap<
    BuiltinElementInstances,
    <V>(V) => (Array<string>) => React$AbstractComponent<{}, {}>
  >;
}
