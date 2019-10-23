const express = require('express');
const router = express.Router();

router.get('/:user/:password', (req, res) => {
    console.log("router got");
    res.send('hi');
})

module.exports = router;