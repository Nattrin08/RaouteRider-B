const express = require('express');
const router = express.Router();

// importación de userController
const userController = require('../controllers/userController');

// rutas
router.get('/:email/', userController.getUser);
router.post('/', userController.createUser);
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

module.exports = router;