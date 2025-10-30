const comicsController = {}
const axios = require('axios');

comicsController.getComics = (req, res) => {
    const POKERMON_API = process.env.POKEMON_API;

    axios.get(POKEMON_API+'/pokemon')
        .then(resp => res.json(resp.data.results))

}

module.exports = comicsController;