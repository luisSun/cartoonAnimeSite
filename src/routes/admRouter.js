const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db/db');



router.get(['/admin'], async (req, res) => {
    res.status(200).render('add');
});

//ADD nova serie Cartoons
router.get(['/adm-addseriecartoons'], async (req, res) => {
    res.status(200).render('partials/add-serieCartoons')
})

router.post('/addSerieCartoons', async (req, res) => {
    console.log(req.body)
    const { title, coverlink } = req.body;
    const type = 1
    // Aqui você pode fazer a validação dos dados recebidos, inserir no banco de dados, etc.
    try {
        // Exemplo de inserção no banco de dados
        const result = await executeQuery('INSERT INTO listaseries (type, title, cover) VALUES (?, ?, ?)', [type, title, coverlink]);

        res.status(200).send('Série adicionada com sucesso.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar série.');
    }
});

//ADD novo Episodio de Cartoons
router.get(['/adm-addEpCartoons'], async (req, res) => {
    const [resulSeries] = await Promise.all([
        executeQuery('SELECT DISTINCT id, title FROM listaseries where type = 1',),
    ]);  
    console.log(resulSeries)
    res.status(200).render('partials/add-Epcartoons', { resulSeries: resulSeries})

})

router.post('/addEpCartoons', async (req, res) => {
    const { series_id, nr_episode, season, title, descricao, midia, formato } = req.body;
    const midiaC = midia+formato
    const serie = req.body.serie_id;
    // Adicione aqui a lógica para inserir os dados na base de dados MySQL
    try {
        // Exemplo de como inserir dados usando mysql2
        const result = await executeQuery('INSERT INTO ep (type, season, ep_nr, title, midia) VALUES (?, ?, ?, ?,?)', [series_id, season, nr_episode,  title, midiaC]);
        console.log('Episódio adicionado com sucesso!');
        res.status(200).send('Episódio adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar episódio:', error);
        res.status(500).send('Erro ao adicionar episódio. Por favor, tente novamente.');
    }
});

//ADD nova serie Anime
router.get(['/adm-addserieanime'], async (req, res) => {
    res.status(200).render('partials/add-serieAnime')
})

router.post('/addSerieAnimes', async (req, res) => {
    console.log(req.body)
    const { title, coverlink } = req.body;
    const type = 2
    // Aqui você pode fazer a validação dos dados recebidos, inserir no banco de dados, etc.
    try {
        // Exemplo de inserção no banco de dados
        const result = await executeQuery('INSERT INTO listaseries (type, title, cover) VALUES (?, ?, ?)', [type, title, coverlink]);
        res.status(200).send('Série adicionada com sucesso.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao adicionar série.');
    }
});

//ADD novo Episodio de Animes
router.get(['/adm-addEpAnimes'], async (req, res) => {
    const [resulSeries] = await Promise.all([
        executeQuery('SELECT DISTINCT id, title FROM listaseries where type = 2',),
    ]);  
    //console.log(resulSeries)
    res.status(200).render('partials/add-EpAnimes', { resulSeries: resulSeries})

})

router.post('/addEpAnimes', async (req, res) => {
    const { series_id, nr_episode, season, title, descricao, midia, formato } = req.body;
    const midiaC = midia+formato
    const serie = req.body.serie_id;

    // Adicione aqui a lógica para inserir os dados na base de dados MySQL
    try {
        // Exemplo de como inserir dados usando mysql2
        const result = await executeQuery('INSERT INTO ep (type, season, ep_nr, title, midia) VALUES (?, ?, ?, ?,?)', [series_id, season, nr_episode,  title, midiaC]);
        console.log('Episódio adicionado com sucesso!');
        res.status(200).send('Episódio adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar episódio:', error);
        res.status(500).send('Erro ao adicionar episódio. Por favor, tente novamente.');
    }
});

module.exports = router;
