import { css } from 'styled-components';

const mediaSizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170,
};

const maxContentWidth = 61.25; // em, equivalent to 980px

// iterate through the mediaSizes and create media template
export const media = Object.keys(mediaSizes).reduce((acc, label) => {
  const emSize = mediaSizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  widthContainer(multiplier) {
    return media.desktop`
      max-width: ${multiplier * maxContentWidth}em;
    `;
  },
};
