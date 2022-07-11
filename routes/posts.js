const router = require('express').Router()
const verify = require('./verifyToken')
const User = require('../models/user')

router.get('/', verify, (req,res) => {
    const userId = req.user._id
    res.send(userId)
})

/*router.get('/:id',getUser, (req,res) => {
    res.send(res.user);
})

async function getUser (req,res,next){
    let user
    try{
        const userId = await User.findById(req.params.id)
        if(userId == null) return res.status(400).send("No Account")
    }catch(err){
        res.status(500).json({message: err.message})
    }
    res.user = user;
    next();
}*/

module.exports = router;