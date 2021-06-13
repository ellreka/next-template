import '../src/styles/style.css'

export const parameters = {
  parameters: {
    layout: 'fullscreen'
  },
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false
        }
      ]
    }
  }
}
