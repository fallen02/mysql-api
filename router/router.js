const express = require('express')
const db = require('../db/db').default
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all()
        res.json(results)
    } catch(err){
        console.log(err)
        res.status(500)
    }
})

router.get('/search/:roll', async (req, res, next) => {
    try {
        let results = await db.roll(req.params.roll)
        res.json(results)
    } catch(err){
        console.log(err)
        res.status(500)
    }
})
router.get('/class/:class', async (req, res, next) => {
    try {
        let results = await db.class(req.params.class)
        res.json(results)
    } catch(err){
        console.log(err)
        res.status(500)
    }
})

module.exports = router