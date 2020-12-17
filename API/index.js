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

app.get('/userActivity',(req,res)=> {
    // forward req , return res
    // maybe queries
    const data = req.body;
    axios.get(keyloggerService + '/userActivity', data)
    .then(response => {
       res.status(200).send(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
}); 

app.post('/userActivity',(req,res)=> {
    // forward req , return res
    const data = req.body;
    axios.post(keyloggerService + '/userActivity', data)
    .then(response => {
        res.status(200).send(response);
    })
    .catch( err => {
        console.log(err);
        res.status(500).send(err);
    })
});

app.post('/register',(req,res)=> {
    // forward req , return res
    const data = req.body;
    axios.post(authService + '/register', data)
});

app.post('/login',(req,res)=> {
    // forward req , return res
    const data = req.body;
    axios.post(authService + '/login', data)
});

  
app.listen(apiPort, () => {
    console.log('Listening on', apiPort);
});