require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login');
const funcoesRoutes = require('./src/routes/funcoes');

app.use(express.json());

app.use(loginRoutes);
app.use(funcoesRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})