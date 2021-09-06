module.exports = {
    name: "async-rickandmorty-web",
    verbose: false,
    setupFiles: ['dotenv/config'],
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 74,
        branches: 50,
        lines: 74,
        functions: 76,
      },
    },
  };