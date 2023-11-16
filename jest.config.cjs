module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
	    "\\.(css|less|scss)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js", "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
}
