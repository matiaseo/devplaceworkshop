require('dotenv').config()
const express = require('express')
const { usersRouter } = require('./users/usersRouter')
const { productsRouter } = require('./products/productsRouter')
const { ordersRouter } = require('./orders/ordersRouter')

const server = express()

server.use(express.json())

server.use('/products', productsRouter)
server.use('/users', usersRouter)
server.use('/orders', ordersRouter)

server.listen(process.env.PORT || 5000)