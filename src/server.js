const express = require("express");
const todosRoutes = require("./tudos.routes");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(todosRoutes);
app.get("/teste", (req, res) => {
  return res.json("Up");
});

app.listen(8081, () => console.log("Server up in port 8081"));
