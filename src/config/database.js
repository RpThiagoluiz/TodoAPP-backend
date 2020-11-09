//mongodb
/*banco de dados
Bancos de dados relacionais como MySQL, PostgreSQL e SQLite3 representam e armazenam dados em tabelas e filas.
Eles são baseados em um ramo da teoria do conjunto algébrico conhecido como álgebra relacional.
Bancos de dados não - relacionais como o MongoDB representam dados em coleções de documentos JSON.
*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')