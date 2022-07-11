const express = require('express')
const router = express.Router()

const userModel = require('../models/user')

router.get('/', (req,res) => {
    res.send('Hello world')
})

router.post('/register', async (req,res) => {
   const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
   });
   
    try{
        const savedUser  = await user.save()
        res.send(savedUser);
   }catch(err){
        res.status(400).send({message : err.message})
   }
})

module.exports = router