// .storybook/preview.js

import '../src/assets/css/main.css';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  iPhone13ProMax: {
    name: 'iPhone 13 Pro Max',
    styles: {
      width: '428px',
      height: '926px',
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports }
  }
}