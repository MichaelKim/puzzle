// @flow strict

// Flow type for importing .md modules
export default ({}: {
  +attributes: {|
    +title: string,
    +space: number
  |},
  +html: string
});
