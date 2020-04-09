const express = require('express');

const CoursesController = require('./controllers/CoursesController');

const routes = express.Router();

// LIST COURSES
routes.get('/courses', CoursesController.index);

// LIST COURSES BY ID
routes.get('/courses/:id', CoursesController.indexById);

// CREATE COURSES
routes.post('/courses', CoursesController.create);

// UPDATE COURSES
routes.patch('/courses/:id', CoursesController.update);

// DELETE COURSES
routes.delete('/courses/:id', CoursesController.delete);

module.exports = routes;
