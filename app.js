const express = require('express')
const app = express()
const port = 8081


// Configurando o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use('/media', express.static('F:\\Documentos\\Cursos\\#2024 - Cursos\\JS\\midia'));


// Rota para renderizar o template
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});