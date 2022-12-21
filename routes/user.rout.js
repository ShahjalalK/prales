const { userPost, userGet, userUpdate, userDelete, userFind } = require('../controller/user.control')

const Router = require('express').Router()


Router.post('/api/users', userPost)

Router.get('/api/users', userGet)
Router.get('/api/users/:id', userFind)
Router.put('/api/users/:id', userUpdate)
Router.delete('/api/users/:id', userDelete)

module.exports = Router