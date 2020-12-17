const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Enivironment Variables & Routes
const keyloggerService = "https://" +  process.env(KEYLOGGER_SERVICE_ENPOINT)
const authService = "https://" + process.env(AUTH_SERVICE_ENPOINT)
const apiPort = process.env(API_PORT)

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
    console.log('Listening on', apiPort);
});