const express = require('express')
const router = express.Router()

const userModel = require('../models/user')
const { registerValidation } = require('../routes/validation')

// import the bcrypt module for encrypt the password
const bcrypt = require('bcryptjs')

router.post('/register', async (req,res) => {
    //VALIDATE DATA BEFORE HAVE A USER
    const { error }= registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
   
    //Checking if the user is already in the database
    const emailExist = await userModel.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exist');

    //HASH THE PASSWORD 
    const salt = await bcrypt.genSalt(10); // this code will be adding 10 random code to the password
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
  const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
   });
   
    try{
        const savedUser  = await user.save()
        res.send(savedUser);
   }catch(err){
        res.status(400).send({message : err.message})
   }
})


module.exports = router