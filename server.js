const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userController = require('../TRFitnessApp/controllers/users');
const excerciseController = require('../TRFitnessApp/controllers/excercise');
const friendsController = require('../TRFitnessApp/controllers/friends');

const app = express();

app.get('/api/v1/profile', (req, res) =>{
    res.send('hello');
})

//Dev logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app
    .use('friends', friendsController)
    .use('/excercise', excerciseController)
    .use('/users', userController )
    .use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, ()=> {
console.log('Server Listening on port ${port}');
})