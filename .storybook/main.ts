module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-a11y',
      options: {
        config: {
          rules: [
            {
              id: 'color-contrast',
              enabled: false
            }
          ]
        }
      }
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ]
}
