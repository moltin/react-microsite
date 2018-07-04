import { css } from 'styled-components'

const breakpoints = {
  phone: 376,
  tablet: 768,
  desktop: 1230
}

export const media = Object.keys(breakpoints).reduce(
  (media, width) => ({
    ...media,
    [width]: (...args) => css`
      @media screen and (min-width: ${breakpoints[width]}px) {
        ${css(...args)};
      }
    `
  }),
  {}
)
