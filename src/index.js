const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")));

//http logger
app.use(morgan("combined"));

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log("🚀 ~ path:", path.join(__dirname, "resources/views"));

//định nghĩa tuyến đường
app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/", (req, res) => {
//   res.render("views");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
