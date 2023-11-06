const fastify = require("fastify");

function init() {
  const app = fastify();
  app.get("/", (request, reply) => reply.send({ hello: "world" }));
  app.post("/", (request, reply) => reply.send(request.body));

  return app;
}
module.exports = init;
