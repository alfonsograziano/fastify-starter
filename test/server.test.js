const test = require("node:test");
const build = require("../src/server.js");
const assert = require("node:assert");

test("server returns hello world", async (t) => {
  const app = build();

  const response = await app.inject({
    method: "GET",
    url: "/",
  });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body, '{"hello":"people"}');
});

test("server returns foo:bar", async (t) => {
  const app = build();

  const response = await app.inject({
    method: "POST",
    url: "/",
    body: {
      foo: "bar",
    },
  });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.body, '{"foo":"bar"}');
});
