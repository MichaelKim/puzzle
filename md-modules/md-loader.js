const matter = require('gray-matter');

let count = 0;

let cache = [];
let currIdx = 1;

module.exports = function(src) {
  const callback = this.async();
  const { content, data } = matter(src);

  const num = this.resourcePath.match(/(\d+)-.+\.md$/)[1];
  cache[num] = () => {
    const replaced = content.replace(
      /\[\^\]\[\[(.+)\]\]/g,
      (match, note) => `<Note num={${count++}}>${note}</Note>`
    );

    const output = `export const frontMatter = ${JSON.stringify(
      data
    )};\nimport Note from "./Note.jsx";\n${replaced}`;
    callback(null, output);
  };

  while (cache[currIdx] != null) {
    cache[currIdx]();
    currIdx += 1;
  }
};
