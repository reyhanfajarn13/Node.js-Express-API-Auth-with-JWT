const express = require('express')
const router = express.Router()

const userModel = require('../models/user')

//VALIDATION
const Joi = require('@hapi/joi');

const schema ={
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required()
}

router.post('/register', async (req,res) => {
    //VALIDATE DATA BEFORE HAVE A USER
    const validation = Joi.validate(req.body, schema);

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