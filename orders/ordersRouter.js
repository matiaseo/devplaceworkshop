const ordersRouter = require('express').Router()

ordersRouter.get('/', async (request, response) => response.send('ok'))
ordersRouter.get('/:id', async (request, response) => response.send('ok'))
ordersRouter.put('/:id', async (request, response) => response.send('ok'))
ordersRouter.delete('/:id', async (request, response) => response.send('ok'))
ordersRouter.post('/', async (request, response) => response.send('ok'))

module.exports = { ordersRouter }