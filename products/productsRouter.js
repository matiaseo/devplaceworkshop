const productsRouter = require('express').Router()
const {
    getAllProducts,
    getProduct,
    updateProduct,
    addProduct,
    deleteProduct
} = require('./productsService');

productsRouter.get('/', async (request, response) => {
    response.status(200).json(await getAllProducts())
})

productsRouter.get('/:id', async (request, response) => {
    const id = +request.params.id
    if(isNaN(id)) return response.status(400).send('invalid id')
    response.status(200).json(await getProduct(id))
})

productsRouter.put('/:id', async (request, response) => {
    response.status(200).json(await updateProduct(request.body))
})

productsRouter.delete('/:id', async (request, response) => {
    const id = +request.params.id
    if(isNaN(id)) return response.status(400).send('invalid id')
    try {
        deleteProduct(id)
        response.status(204).end()
    } catch (error) {
        response.status(400).send(error)
    }
})
productsRouter.post('/', async (request, response) => {
    response.status(200).json(await addProduct(request.body))
})

module.exports = { productsRouter }