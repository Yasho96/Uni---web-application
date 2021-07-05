const express = require ('express');
const router = express.Router(); //interface
const controller = require('../controllers/subjectController');

module.exports = function () {
    router.post('/create',controller.createSubject); //referring the function
    return router;
};