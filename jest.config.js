module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
