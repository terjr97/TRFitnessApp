const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:user', async (req, res) => {
    try{
        const headers = {

        }
    
        const {user} = req.params;


    } catch (err) {
        console.error(err);
        res.status(500).json({
            message:'server error'
        })
    }
});

module.exports = router;