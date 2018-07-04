import { injectGlobal } from 'styled-components'

import { media } from '../../utils'

const bodyFont =
  'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.25%;
    line-height: 1;
    width: 100%;
    height: 100%;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    background-color: #fff;
    font-size: 1.6rem;
    line-height: 1;
    font-family: ${bodyFont};
    font-weight: 300;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    color: #131313;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  button, input {
    font-family: ${bodyFont};
    font-size: 1.6rem;
  }
  
  a {
    color: #313131;
    text-decoration: none;
    transition: color 75ms ease-in;
  }

  p {
    line-height: 1.6;
  }

  .slider-frame {
    height: calc(100vh - 100px) !important;

    ${media.tablet`
      height: calc(100vh - 140px) !important;
    `};
  }

  .slider-control-bottomcenter {
    display: none;

    ${media.tablet`
      display: block;
    `};
  }

  .slider-control-bottomcenter > ul > li > button {
    color: #313131 !important;
  }
`
