module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/src", "<rootDir>/test"],
  // testMatch: [
  //   "**/__tests__/**/*.tsx?", "**/?(*.)+(spec|test).[jt]s?x?",
  // ],
  collectCoverage: true,
  coverageDirectory: 'coverage/',
  // collectCoverageFrom: [
  //   "src/**/*.{ts,tsx}",
  //   "!src/**/*.test.{ts,tsx}",
  // ],
};