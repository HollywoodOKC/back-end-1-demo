const express = require("express");
const cors = require("cors");
const app = express();

const port = 5050;

app.use(express.json());
app.use(cors());

//Data
let inventory = ['computer', 'jacket', 'hat', 'TV', 'Mac', 'water', 'keys', 'food', 'backpack', 'wallet'];

app.get("/api/inventory", (req, res) => {
  res.status(200).send(inventory);
});

app.listen(port, () => console.log(`Listening on port ${port}, solid connection`));
