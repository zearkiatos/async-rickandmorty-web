module.exports = {
    name: "async-rickandmorty-web",
    verbose: false,
    setupFiles: ['dotenv/config'],
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 65,
        branches: 25,
        lines: 65,
        functions: 71,
      },
    },
  };