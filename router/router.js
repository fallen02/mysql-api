const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/all', async (req, res, next) => {
    try {
        let results = await db.all()
        console.log(results)
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
        if(results.length === 0) res.status(400)
        res.json(results)
    } catch(err){
        console.log(err)
        res.status(500)
    }
})

router.post('/add', async(req, res, next) => {
    try{
        const data = req.body
        console.log(data)
        let results = await db.add(data)
        res.json(results)
    } catch(err){
        console.log(err)
        res.status(500)
    }
})
router.delete('/remove/:roll', async(req, res, next) => {
    try{
        let results = await db.delete(req.params.roll)
        res.json(results)
    } catch{
        console.log(err)
        res.status(500)
    }
})

module.exports = router