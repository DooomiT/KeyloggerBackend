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

// Datamodel
const UserActivity = mongoose.model('UserActivity', new Schema({
  userId: string,
  activityPercentage: string,
  classTags: [string],
  tags: [string]
}))

// get Data by querry
app.get('/userActivity',(req,res)=> {
    // forward req , return res
    // queried by userid
    const { userId, classTags, tags } = req.body();
    db.on('error', console.error.bind(console, 'connection error:')); 
    UserActivity.find({ 
      'userId'  : userId,
       classTags: {$in : classTags},
       tags     : {$in : tags}
    })
    .then((userActivities) => res.status(200).send(userActivities))
    .catch((err) => res.status(400).send(err));
}); 

// post a UserActivity
app.post('/userActivity',(req,res)=> {
    const {userId, activityPercentage, classTags, tags} = req.body
    db.on('error', console.error.bind(console, 'connection error:'));
    const userActivity = new UserActivity({
      userId: userId,
      activityPercentage: activityPercentage,
      classTags : classTags,
      tags : tags
    });
    userActivity.save(function(err, userA) {
      if(err) {
          console.log(err);
          return res.status(500).send(); 
      }     
    });
    res.send({});
});

app.listen(apiPort, () => {
  console.log("Listening on", keyloggerServicePort);
});
