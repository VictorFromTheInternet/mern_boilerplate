import express from 'express'
import db from '../db/connection.js'
import {ObjectId} from 'mongodb'

const router = express.Router()

// all records
router.get('/', async(req,res)=>{
    let collection = await db.collection('records')
    let results = await collection.find({}).toArray()

    res.send(results).status(200)
})

// get one
router.get(':id', async(req,res)=>{
    let collection = await db.collection('records')
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query)

    if(!result){
        res.send('Record not found').status(404)                
    }
    else{
        res.send(result).status(200)
    }
})

// create
router.post('/', async(req,res)=>{
    
})
