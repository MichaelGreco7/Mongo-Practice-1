const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://michaelgreco7:CGpg69@!Q@cluster0-six5b.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const start = () => {
  return app.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

module.exports = { start };
