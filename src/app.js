const init = require("./server");

init().listen({ port: 3000 }, (err) => {
  if (err) console.error(err);
  console.log("server listening on 3000");
});
