const db = require('./db');
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');


const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//-----LANDING PAGE-----
app.get('/', (req, res) => {

}); 
//------LOGIN PAGE------
app.get('/login', (req, res) => {

});
//-------REGISTRATION-------
app.get('/registration', (req, res) => {

});

const port = 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));

