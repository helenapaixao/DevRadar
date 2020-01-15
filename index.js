const express = require('express')

const app = express();

app.use(express.json());

//Métodos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação )

app.post('/users', (request, response) => {
  console.log(request.body);
  return response.json({message: 'Hello OmniStack'});
});

app.listen(3333);