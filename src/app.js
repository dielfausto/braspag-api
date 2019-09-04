const express = require('express');
const routes = require('./routes');

const server = express();

server.get('/', (req, res) => {
    res.send('Servidor API Rest Conectado!');

});

// Middleware
server.use(express.json());

// Rotas
server.use(routes);

module.exports = server;