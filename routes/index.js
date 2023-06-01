const routes = require('express').Router();

const lesson1controller = require('../controllers/lesson01.js');

routes.get('/', lesson1controller.aronRoute);

routes.get('/moi', lesson1controller.moiRoute);
routes.get('/mina', lesson1controller.mirnaRoute);


module.exports = routes;