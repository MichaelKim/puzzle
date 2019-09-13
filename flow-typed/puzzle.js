// @flow strict

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

  declare export function createGlobalStyle(
    Array<string>
  ): React$AbstractComponent<{}, {}>;

  declare export default $ObjMap<
    BuiltinElementInstances,
    <V>(V) => (Array<string>) => React$AbstractComponent<{}, *>
  >;
}
