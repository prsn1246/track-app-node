const express = require('express');
const app = express();
const compression = require('compression')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.set('json spaces', 2); //pretty print JSON response
app.use(compression()); //Compress the JSON response
app.use(bodyParser.json({limit: '4mb'}))
app.use(bodyParser.urlencoded({limit: '4mb', extended: true}))


app.use(morgan('combined'));

app.use('/users', users);

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        message: "Invalide Route"
    });
});

app.listen(port, () => {
    console.log('Ready for accepting http requests');
});