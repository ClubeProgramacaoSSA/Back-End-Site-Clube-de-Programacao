const express = require('express');
const app = express();

app.use('/teste', (req, res, next) => {
    return res.status(200).send({
        mensagem: "Ok deu certo o teste"
    })
});



module.exports = app;