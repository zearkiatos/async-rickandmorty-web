module.exports = {
    name: "async-rickandmorty-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 89,
        branches: 33,
        lines: 88,
        functions: 95,
      },
    },
  };