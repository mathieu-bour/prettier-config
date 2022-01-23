expect.extend(require('jest-json-schema').matchers);
const fetch = require('node-fetch');

describe('Prettier configuration file', () => {
  it('should match the Prettier JSON schema', async () => {
    const schemav4 = await fetch('https://json.schemastore.org/prettierrc').then((r) => r.json());
    const schemav7 = {
      ...JSON.parse(JSON.stringify(schemav4).replace(/"id"/, '"$id"')),
      $schema: 'http://json-schema.org/draft-07/schema#',
    };
    const config = require('./.prettierrc');

    expect(config).toMatchSchema(schemav7);
  });
});
