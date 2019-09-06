## Puzzle

An interactive explanation on solving the 15 Puzzle

### Build

To run locally, clone this repo, and run

- `npm install`
- `npm start`
  - Open at `localhost:8000`

To make a production build, run `npm run build` and `npm run serve`.

## Markdown

Each text block is written in Markdown and is compiled using `markdown-it`. In order to handle inline math (`$a^b$`), block math (`$$a^b$$`), and notes, I wrote a custom plugin that renders these additions.
