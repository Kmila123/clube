const express   = require('express');
const exphbs    = require('express-handlebars');
const conn      = require('./db/conn');
const app       = express();

//Configuração Template Engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Models
const socio = require('./models/socio');
//const dependente = require('./models/dependente');

//Importação de Rotas
const sociosRoutes = require('./routes/socioRoutes');
//const sociosRoutes = require('./routes/dependentesRoutes');

//Configuração para aceitar dados de formulários
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Rotas da Aplicação
app.use('/socio', sociosRoutes);
//app.use('/dependente', dependentesRoutes);
conn.sync()
.then(
    app.listen(3000)
).catch((erro) => console.log(erro));