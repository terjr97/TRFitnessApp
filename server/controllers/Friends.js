const express = require('express');
const friends = require('../models/Friends');

const app = express.Router();

app.get('/', (req, res) => res.send(friends))
app.post('/', (req, res) => {
    friends.push(req.query);
    res.send(friends[friends.length - 1]);
})



module.exports = app;