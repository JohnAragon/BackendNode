'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'}); 

router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/project/save',ProjectController.saveProject);
router.post('/project/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project/update/:id',ProjectController.updateProject);
router.post('/project/update/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);
router.delete('/project/delete/:id',ProjectController.deleteProject);
router.get('/project/get-image/:image',ProjectController.getImageFile);



module.exports = router;