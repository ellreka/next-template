let parserConfig = {}

try {
  require.resolve('typescript')

  parserConfig = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    }
  }
} catch (_) {}

module.exports = {
  ...parserConfig,
  env: {
    jest: true,
    browser: true
  },
  extends: [
    'standard-with-typescript',
    'standard-react',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    'typescript-sort-keys',
    'prettier',
    'react-hooks',
    'simple-import-sort',
    'sort-destructure-keys',
    'tsdoc',
    'jsx-a11y'
  ],
  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/jsx-handler-names': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'tsdoc/syntax': 'warn',
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error'
      }
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          { caseSensitive: false }
        ]
      }
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off'
      }
    }
  ]
}
