const express = require('express');
const router = express.Router();
const { executeQuery } = require('../db/db');


router.get(['/','/main','/home'], async (req, res) => {
    const [resulFilms, resultSeries] = await Promise.all([
        executeQuery('SELECT * FROM listaseries WHERE type =1 ORDER BY id DESC limit 4',),
        executeQuery('SELECT * FROM listaseries WHERE type =2 ORDER BY id DESC limit 4',),
    ]);
    const valor= ['serie', 'anime']
    res.status(200).render('index', { resulFilms: resulFilms, resultSeries: resultSeries, valor: valor});
});



module.exports = router;
