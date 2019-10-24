const express = require('express');
const users = require('../models/friends')
const app = express.Router()

app.get('/', (req, res) => res.send(users))
app.post('/', (req, res) => {
    users.push(req.query)
    res.send(users[users.length-1])
})

app.get('/delete', (req, res) => res.send(users))
app.post('/', (req, res) => {
    users.splice(req.query)
    res.send(users[users.length-1])
})

module.exports = app;