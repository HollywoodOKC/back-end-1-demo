const express = require("express");
const cors = require("cors");
const { response } = require("express");
const app = express();

const port = 5050;

app.use(express.json());
app.use(cors());

//Data
let inventory = ['computer', 'jacket', 'hat', 'TV', 'Mac', 'water', 'keys', 'food', 'backpack', 'wallet'];

app.get("/api/inventory", (req, res) => {
  if (inventory.includes(req.query.item)) {
    res.status(200).send([req.query.item]);
  }

  res.status(200).send(inventory);
});

app.get("/api/inventory/:index", (req, res) => {
  const { index } = req.params;
  res.status(200).send(inventory[index]);
});

app.listen(port, () => console.log(`Listening on port ${port}, solid connection`));
