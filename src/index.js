const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-p1bcw.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use(routes);

//Métodos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação )
//MongoDB (Não-relacional)



app.listen(3333);