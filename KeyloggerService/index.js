const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Enivironment Variables & Routes
const keyloggerDatabaseName = process.env(KEYLOGGER_DATABASE_NAME);
const keyloggerDatabaseHostname = process.env(KEYLOGGER_DATABASE_HOSTNAME);
const keyloggerDatabasePort = process.env(KEYLOGGER_DATABASE_PORT);
const keyloggerDatabaseUser = process.env(KEYLOGGER_DATABASE_USER);
const keyloggerDatabasePassword = process.env(KEYLOGGER_DATABASE_PASSWORD);
const keyloggerServicePort = process.env(KEYLOGGER_SERVICE_PORT);

// Database Connection using mongoose
const mongo_uri =
  "mongodb://" +
  keyloggerDatabaseHostname +
  ":" +
  keyloggerDatabasePort +
  "/" +
  keyloggerDatabaseName;

mongoose.connect(mongo_uri, {
  keyloggerSource: db_name,
  user: keyloggerDatabaseUser,
  pass: keyloggerDatabasePassword,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

app.get('/data',(req,res)=> {
    // forward req , return res
    // maybe queries

}); 

app.post('/register',(req,res)=> {
    // forward req , return res

});

app.post('/login',(req,res)=> {
    // forward req , return res

});

app.post('/data',(req,res)=> {
    // forward req , return res

});

app.listen(apiPort, () => {
  console.log("Listening on", keyloggerServicePort);
});
