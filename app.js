const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routeTeste = require('./routes/teste');
const routeTeams = require('./routes/teams');
const routeTournament = require('./routes/tournament');
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


app.use('/equipe', routeTeams);
app.use('/teste', routeTeste);
app.use('/torneio', routeTournament);

app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Não foi encontrado a rota especificada';
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: error
    });
});

module.exports = app;