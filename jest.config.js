module.exports = {
    name: "async-rickandmorty-web",
    verbose: false,
    setupFiles: ['dotenv/config'],
    testMatch: ["**/*.test.js"],
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 78,
        branches: 70,
        lines: 78,
        functions: 83,
      },
    },
  };