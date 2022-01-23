module.exports = {
  // Prettier basic configuration
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  /**
   * Plugins are imported using `require.resolve` in order to fix pnpm-related issues
   * @see https://github.com/trivago/prettier-plugin-sort-imports/issues/51
   */
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports'), require.resolve('prettier-plugin-solidity')],

  // @trivago/prettier-plugin-sort-import
  importOrder: ['^react$', '^@.*$', '^[./]'],

  // prettier-plugin-solidity
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        explicitTypes: 'always',
      },
    },
  ],
};
