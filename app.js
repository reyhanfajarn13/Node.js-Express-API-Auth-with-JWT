require('dotenv').config()

const express = require('express')
const app = express()

//const mongoose = require('mongoose')

//DATABASE CONNECTED
//mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology:true})

//const db = mongoose.connection

//db.on('error',(err) => console.log(err))
//db.once('open',() => console.log('Database Connect!'))

const authRouter = require('./routes/auth')

//
app.use('/api/user',authRouter)




const PORT = 3000
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))