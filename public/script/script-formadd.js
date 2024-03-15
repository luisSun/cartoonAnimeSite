/*
Script para carregar os formularios em /adm como um 
*/

document.addEventListener('DOMContentLoaded', () => {
    const addSerieCartoonsItem = document.querySelector('a[href="#addSerieCartoons"]');
    const addSerieAnimesItem = document.querySelector('a[href="#addSerieAnime"]');
    const addEpCartoonsItem = document.querySelector('a[href="#addEpCartoons"]');
    const addEpAnimesItem = document.querySelector('a[href="#addEpAnimes"]');
    const addFilmeItem = document.querySelector('a[href="#filmes"]');
    const formAddSerie = document.querySelector('.form-addserie');

    addSerieCartoonsItem.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/adm-addseriecartoons');
            const html = await response.text();
            formAddSerie.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    });

    addSerieAnimesItem.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/adm-addserieanime');
            const html = await response.text();
            formAddSerie.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    });

    addEpCartoonsItem.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/adm-addEpCartoons');
            const html = await response.text();
            formAddSerie.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    });

    addEpAnimesItem.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/adm-addEpAnimes');
            const html = await response.text();
            formAddSerie.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    });

    addFilmeItem.addEventListener('click', async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/adm-addfilmes');
            const html = await response.text();
            formAddSerie.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    });
});