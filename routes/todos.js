const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markFavorite', todosController.markFavorite)

router.put('/markNotFavorite', todosController.markNotFavorite)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router