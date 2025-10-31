const comicsController = require('../controllers/comics');

const comicsRouter = require('express').Router();

comicsRouter.get('/', comicsController.getComics);

module.exports = comicsRouter;
