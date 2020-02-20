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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("user", userSchema);

app.post("/user", async (request, response) => {
  try {
    console.log("POST USER");
    var userInstance = new UserModel(request.body);
    console.log(userInstance);
    const created = await UserModel.create(userInstance);
    response.send(created);
  } catch (error) {
    response.status(500).send(error);
  }
});

const start = () => {
  return app.listen(PORT, () => console.log(`server is running on ${PORT}`));
};

module.exports = { start };
