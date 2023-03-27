var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var indexRouter = require("./routes/index");
const { create } = require("./models/User");
dotenv = require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Declaring Routes
getUsers = require("./routes/getAlluser");
signup = require("./routes/signup");
login = require("./routes/login");
getAllPost = require("./routes/getAllPost");
createpost = require("./routes/createPost");
deletePost = require("./routes/deletePost");
getPostByUserName = require("./routes/getpostbyusername");
likepost = require("./routes/likepost");
count = require("./routes/getcount");
comments = require("./routes/postcomments");

//PORT ENVIRONMENT VARIABLE  MONGODB Connect
const port = process.env.PORT;
const CONNECTION_URL = process.env.MONGODB_URL;

mongoose
  .connect(CONNECTION_URL)
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});

//  view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Routes to use

// User Routes
app.use("/", indexRouter);
app.use("/api/user/getallusers", getUsers);
app.use("/api/user/signup", signup);
app.use("/api/user/login", login);

// Post Routes
app.use("/api/post/getallposts", getAllPost);
app.use("/api/post/createpost", createpost);
app.use("/api/post/delete", deletePost);
app.use("/api/post/getpostbyusername", getPostByUserName);
app.use("/api/post/like", likepost);
app.use("/api/post/getcount", count);
app.use("/api/post/comment", comments);

// Starter and Error Listen Statesments

//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
