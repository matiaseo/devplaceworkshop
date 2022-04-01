const authenticationRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const {
    registerUser,
    checkCredentials
} = require('./authenticationService');

authenticationRouter.post('/register', async (request, response) => {
    const user = await registerUser(request.body)
    if(user) {
        response.status(200).json(user)
    } else
        response.status(404).end()
})

authenticationRouter.post('/login', async (request, response) => {
    const user = await checkCredentials(request.body)
    if(user) {
        const { id, username, email, roleName, address } = user
        const token = jwt.sign({ id, username, email, roleName, address }, jwtSecret)
        response.status(200).json({ token })
    } else
        response.status(401).send('Invalid credentials')
})

module.exports = { authenticationRouter }