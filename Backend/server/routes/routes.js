const express = require('express');
const route = express.Router();

const services = require('../services/services');

route.get('/', services.homeRoutes);

module.exports = route;