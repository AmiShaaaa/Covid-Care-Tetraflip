const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const session = require("express-session");
var mysql = require("mysql");
const fileUpload = require("express-fileupload");
const app = express();

require("dotenv").config();

const port = process.env.PORT;
global.db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "./public")));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const home = require("./routes/home.js");
app.use("/", home);


app.listen(port, () => {
  console.log("server is up on port 3000");
});
