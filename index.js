const awsLambdaFastify = require("@fastify/aws-lambda");
const init = require("./src/server");

const proxy = awsLambdaFastify(init());
exports.handler = proxy;
