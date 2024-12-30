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

const updateLinksUnderline = () => {
  document.querySelectorAll('a').forEach((link) => {
    link.style.textDecorationColor = Colors[Math.floor(Math.random() * Colors.length)];
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
