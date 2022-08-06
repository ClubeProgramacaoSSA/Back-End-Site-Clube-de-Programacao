import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { testRouter } from './routes/teste.js'
import { tournamentRouter } from './routes/tournament.js';
// import routeTeams from './src/routes/teams';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// Sets default header, but express already do this?
app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    req.quack = true;
    next();
});
app.use('/tournament',tournamentRouter )
app.use('/test',testRouter);

// app.use('/equipe', routeTeams);
// app.use('/teste', routeTeste);

app.get('/',(req,res) => {
    res.send('hasQuack:'+ Boolean(req.quack));
    res.end();
});

//Default Route
app.use('*',(req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Não foi encontrado a rota especificada';

    res.send({error , quack: Boolean(req.quack)});
});

// app.use('*',(req, res, next) => {
//     const error = new Error();
//     error.status = 404;
//     error.message = 'Não foi encontrado a rota especificada';
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     return res.send({
//         error: error
//     });
// });

export default app;