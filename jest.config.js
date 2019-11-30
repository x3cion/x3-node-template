module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/test"],
  coverageDirectory: "coverage/",
  moduleDirectories: ["node_modules", "src"]
};
