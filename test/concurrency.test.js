/* eslint-disable no-undef */
const NetworkError = require("../src/concurrency/NetworkError");

test("NetworkError instance should has correct name member", () => {
  const newtworkErrorInstance = new NetworkError();
  expect(newtworkErrorInstance.name).toStrictEqual("NetworkError");
});
