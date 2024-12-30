/**
 * Thanks https://cassidoo.co/ for the inspiration
 */

import colors from 'tailwindcss/colors';

const Colors = [
  colors.red['600'],
  colors.orange['600'],
  colors.yellow['300'],
  colors.lime['600'],
  colors.teal['500'],
  colors.blue['600'],
  colors.fuchsia['600'],
];

function shuffleArray(array: string[]): string[] {
  const result = [...array];
  for (let i = result.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const textDecorationColor = (function* () {
  while (true) {
    const colors = shuffleArray(Colors);

    for (const color of colors) {
      yield color;
    }
  }
})();

const updateLinksUnderline = () => {
  document.querySelectorAll('a').forEach((link) => {
    link.style.textDecorationColor = textDecorationColor.next().value;
  });
};

const initRainbowLinks = () => {
  updateLinksUnderline();

  document.addEventListener('mouseover', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      updateLinksUnderline();
    }
  });
};

export default initRainbowLinks;
