module.exports = {
  "moduleFileExtensions": [
    "js",
    "vue",
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue",
  ],
  "transformIgnorePatterns": [
    '<rootDir>/node_modules/',
  ],
}