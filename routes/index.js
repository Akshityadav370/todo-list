const express = require('express');

// Setting up the router
const router = express.Router();


// importing the controllers
const homeController = require('../controllers/home_controller');

// Routing the requests
router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);
router.get('/delete-task', homeController.deleteTask);
router.post('/update-task', homeController.updateTask);

module.exports = router;