const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Enivironment Variables & Routes
const authDatabaseName = process.env(AUTH_DATABASE_NAME);
const authDatabaseHostname = process.env(AUTH_DATABASE_HOSTNAME);
const authDatabasePort = process.env(AUTH_DATABASE_PORT);
const authDatabaseUser = process.env(AUTH_DATABASE_USER);
const authDatabasePassword = process.env(AUTH_DATABASE_PASSWORD);
const authServicePort = process.env(AUTH_SERVICE_PORT);

// Database Connection using mongoose
const mongo_uri =
  "mongodb://" +
  authDatabaseHostname +
  ":" +
  authDatabasePort +
  "/" +
  authDatabaseName;

mongoose.connect(mongo_uri, {
  authSource: db_name,
  user: authDatabaseUser,
  pass: authDatabasePassword,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// https://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management
/*  
Datamodel Register: {
    username : encoded json
    password : encoded json
    emailaddr : encoded json
    ....
}
Datamodel Login: {
    username : encoded json
    password : encoded json
}
*/

app.post("/register", (req, res) => {
  // check if user exists
  // if not create it
});

app.post("/login", (req, res) => {
  // check if user exists
  // if yes return a auth
});

app.listen(apiPort, () => {
  console.log("Listening on", authServicePort);
});
