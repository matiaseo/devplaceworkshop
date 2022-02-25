const usersRouter = require('express').Router()

usersRouter.get('/', async (request, response) => response.send('ok'))
usersRouter.get('/:id', async (request, response) => response.send('ok'))
usersRouter.put('/:id', async (request, response) => response.send('ok'))
usersRouter.delete('/:id', async (request, response) => response.send('ok'))
usersRouter.post('/', async (request, response) => response.send('ok'))

module.exports = { usersRouter }