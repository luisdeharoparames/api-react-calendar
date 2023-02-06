const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
// const status = require("./DATA/status.js");
app.use(express.json());
app.use(cors());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let data = [];

//Get
app.get("/api/events/view", (req, res) => {
  console.log(data);
});

app.get("/api/events", (req, res) => {
  let year = req.query.year;
  let month = req.query.month;
  let day = req.query.day;
  res.json({ title: "title", year, month, day });
});

//POST
app.post("/api/events", (req, res) => {
  const { month, ...rest } = req.body;
  if (month > 11) {
    res.status(404).json({
      message: `el mes recibido no es correcto: ${month}`,
      status: 404,
    });
  }
  const newData = {
    id: uuidv4(),
    month,
    ...rest,
  };
  data.push(newData);
  console.log(data);
  res.status(200).json({ message: "ok, todo bien", status: 200 });
});

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
