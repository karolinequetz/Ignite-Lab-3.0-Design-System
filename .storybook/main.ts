import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  "core": {
    "builder": "@storybook/builder-vite"
  },
  docs: {
    autodocs: "tag",
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Ignite-Lab-3.0-Design-System/'
    }
    return config
  }
};
export default config;


