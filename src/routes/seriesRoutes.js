const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db/db');

router.get('/cartoon', async (req, res) => {
    const [result] = await Promise.all([
        executeQuery('SELECT * FROM listaseries WHERE type = 1 ORDER BY id',),
    ]);
    const valor= ['Filmes', 'serie']
    res.status(200).render('filmesMain', { result: result, valor : valor });
});

router.get('/anime', async (req, res) => {
    const [result] = await Promise.all([
        executeQuery('SELECT * FROM listaseries WHERE type = 2 ORDER BY id',),
    ]);
    const valor= ['Filmes', 'serie']
    res.status(200).render('filmesMain', { result: result, valor : valor });
});

router.get('/serie/:imdb_cod', async (req, res) => {
    try {
        const imdb_cod = req.params.imdb_cod;

        // Busca o ID correspondente ao imdb_cod na tabela series_teste
        const [serie] = await executeQuery('SELECT id, cover FROM listaseries WHERE id = ?', [imdb_cod]);

        if (!serie) {
            console.log('Nenhum item encontrado com o ID fornecido.');
            res.status(404).send('Nenhum item encontrado com o ID fornecido.');
            return;
        }

        // Busca os episódios relacionados na tabela series_ep
        const [resulFilms] = await Promise.all([
            executeQuery('SELECT * FROM ep where type = ?', [serie.id]),
        ]);

        if (!resulFilms) {
            console.log('Nenhum item encontrado com o ID fornecido.');
        }

        const coverPath = serie.cover
        console.log(coverPath)
        const valores = ['Filmes', 'filmes'];
        const coverPth = ['01','02']
        //serie.cover; // Salvando o caminho da capa da série em uma constante


        //console.log(coverPath);
        //console.log(JSON.stringify(resulFilms));
        res.status(200).render('serieslist', { coverPath: coverPath, resulFilms: resulFilms, valores: valores});
    } catch (err) {
        console.error('Erro ao buscar item:', err);
        res.status(500).send('Erro ao buscar item');
    }
});


module.exports = router;
