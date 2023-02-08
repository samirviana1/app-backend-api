const express = require("express");
const todosRoutes = require("./tudos.routes");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(todosRoutes);
app.get("/teste", (req, res) => {
  return res.json("Up");
});

app.listen(3000, () => {
  console.log("Server up in port 3000");
});
