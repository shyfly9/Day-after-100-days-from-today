const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const r = addDays(date, 100);

  response.send(`${r.getDate()}/${r.getMonth() + 1}/${r.getFullYear()}`);
});
module.exports = app;
