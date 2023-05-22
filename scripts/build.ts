import type { IconSpec } from './icons.js';

import { mkdir, writeFile } from 'node:fs/promises';
import * as SETS from './icons.js';

// const getContent = (name: string, { height, width, path, xOffset = 0, yOffset = 0 }: IconSpec) =>
//   `import{svg}from'lit';export default svg\`<svg xmlns="http://www.w3.org/2000/svg" data-icon-name="${name}" height="${height}" width="${width}" viewBox="${[xOffset, yOffset, width, height].join(' ')}"><path d="${path}" /></svg>\`;`;

const getJavaScriptModule = (svg: string) =>
  `const t = document.createElement('template');t.innerHTML=\`${svg}\`;export default t.content.cloneNode(true);`;
const getSVG = (name: string, { height, width, path, xOffset = 0, yOffset = 0 }: IconSpec) =>
  `<svg xmlns="http://www.w3.org/2000/svg" data-icon-name="${name}" height="${height}" width="${width}" viewBox="${[xOffset, yOffset, width, height].join(' ')}"><path d="${path}" /></svg>`

for (const [setName, icons] of Object.entries(SETS)) {
  const dir = new URL(`../${setName}/`, import.meta.url);
  await mkdir(dir, { recursive: true });
  for (const [name, icon] of Object.entries(icons)) {
    const svg = getSVG(name, icon);
    await writeFile(new URL(`./${name}.svg`, dir), svg, 'utf8');
    await writeFile(new URL(`./${name}.js`, dir), getJavaScriptModule(svg), 'utf8');
  }
}
