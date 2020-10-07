module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    },
  },
  transformIgnorePatterns: [ 'node_modules/(?!lodash-es/.*)', ],
};