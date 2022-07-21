const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routeTeste = require('./routes/teste');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});



app.use('/teste', routeTeste);



module.exports = app;