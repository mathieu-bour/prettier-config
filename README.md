# `@mathieu-bour/prettier-config`

My personal Prettier configuration with additional plugin that I like/find interesting.
Originally based on [csquare-ai](https://github.com/csquare-ai)'s official [Prettier](https://prettier.io) configuration (that I wrote).

## Installation

```bash
npm install --dev @mathieu-bour/prettier-config
```

Then, ensure that your `package.json` file contains the entry:

```json
{
  "prettier": "@mathieu-bour/prettier-config"
}
```

## Plugins

In addition to the Prettier default rules, we also use the following plugins:

- [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- [prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity)

## References

- [Prettier - Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations)
