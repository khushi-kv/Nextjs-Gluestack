import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    // We need to make sure that only one version is loaded for peerDependencies
    // So we alias them to the versions in example's node_module

    Object.assign(config.resolve.alias, {
      "react-native": path.join(__dirname, "../node_modules/react-native-web"),
    });
    // config.module.rules.push({
    //   test: /\.mjs$/,
    //   include: /node_modules/,
    //   type: 'javascript/auto',
    // });

    config.resolve.extensions.unshift(".web.ts");
    config.resolve.extensions.unshift(".web.tsx");
    config.resolve.extensions.unshift(".web.js");
    config.resolve.extensions.unshift(".web.jsx");

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
