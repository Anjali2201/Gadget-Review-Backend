var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var indexRouter = require("./routes/index");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///// USER Models
// const UserModel= require("./models/User");
// const feedbackModel = require("./models/feedback");
// const Event1Model = require("./models/event1");

///// Declaring Routes
// addUser= require("./routes/addUser");
getUsers = require("./routes/getAlluser");
// addFeedback = require("./routes/addFeedback");
// getFeedback = require("./routes/getFeedback");
// addEvent11JanRegistration = require("./routes/addEvent11JanRegistrations");
// getEvent11JanRegistration = require("./routes/getEvent11JanRegistrations");

//PORT ENVIRONMENT VARIABLE  MONGODB Connect
const port = process.env.PORT || 8000;
const CONNECTION_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://Anjali:amdra2201@cluster0.nkdvolv.mongodb.net/Reviews?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL)
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

/////  view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

///// Routes to use

app.use("/", indexRouter);
// app.use("/add-user", addUser);
app.use("/api/user/getallusers", getUsers);
// app.use("/add-feedback", addFeedback);
// app.use("/get-feedback", getFeedback);
// app.use("/add-event1Registration", addEvent11JanRegistration);
// app.use("/get-event1Registration", getEvent11JanRegistration);

////// Starter and Error Listen Statesments

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});

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
