const express = require ('express');
const router = express.Router(); //interface
const controller = require('../controllers/courseController');

module.exports = function () {
    router.post('/create',controller.createCourse); //referring the function
    router.get('/',controller.getAllCourses);
    router.get('/:id',controller.getSubjectsForCourse);
    router.get('/amount/:id',controller.calculateAmount);
    return router;
};