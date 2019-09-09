const matter = require('gray-matter');

let count = 0;

let cache = [];
let countCache = [];
let currIdx = 1;

module.exports = function(src) {
  const callback = this.async();
  const { content, data } = matter(src);

  const num = this.resourcePath.match(/(\d+)-.+\.md$/)[1];
  cache[num] = c => {
    const replaced = content.replace(
      /\[\^\]\[\[(.+)\]\]/g,
      (match, note) => `<Note num={${c++}}>${note}</Note>`
    );

    const output = `export const frontMatter = ${JSON.stringify(
      data
    )};\nimport Note from "./Note.jsx";\n${replaced}`;
    callback(null, output);

    return c;
  };

  if (countCache[num] != null) {
    let count2 = countCache[num];
    cache[num](count2);
    return;
  }

  while (cache[currIdx] != null) {
    countCache[currIdx] = count;
    count = cache[currIdx](count);
    currIdx += 1;
  }
};
