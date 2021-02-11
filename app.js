const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/mainRoutes');

const dataAccessRoutes = require('./routes/acessoAosDados');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes);
app.use(dataAccessRoutes);

app.listen(3000);
