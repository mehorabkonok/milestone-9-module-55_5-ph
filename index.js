const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello 5");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const expected_id = parseInt(req.params.id);
  console.log("I need data for id:", expected_id);

  const phone = phones.find((phone) => phone.id === expected_id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
