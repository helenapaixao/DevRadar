const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-p1bcw.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());

//Métodos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação )
//MongoDB (Não-relacional)

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({message: 'Hello OmniStack'});
});

app.listen(3333);