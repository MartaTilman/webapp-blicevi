import express from 'express'
import bodyParser from "body-parser"
import connect from './db.js'
import mongo from "mongodb"

const app = express()
const port = 3000
app.use(bodyParser.json())
app.get('/a/:id', async (req, res) => {
    let id = req.params.id
    let db = await connect()
    let doc = await db.collection('a').findOne({ _id: mongo.ObjectId(id) })
    if (doc) {
        res.json({ "status": "OK", "data": doc })
    }
    else { res.json({ "status": "Failed" }) }
})

app.post('/a', async (req, res) => {
    let db = await connect()
    let data = req.body
    let result = await db.collection('a').insertOne(data)
    if (result.insertedId) {
        res.json({ "status": "OK", "message": 'Item inserted with $(result.insertedId)' })

    } else {
        res.json({ "status": "Failed" })
    }

})