require('dotenv').config()

const express = require('express')
const app = express()
const authRouter = require('./routes/auth')
const mongoose = require('mongoose')

//DATABASE CONNECTED
mongoose.connect(process.env.DATABASE_CONNECT, 
    {useNewUrlParser: true, useUnifiedTopology:true},
    () => console.log('connected to db!'))

//const db = mongoose.connection

//db.on('error',(err) => console.log(err))
//db.once('open',() => console.log('Database Connect!'))
app.use(express.json());


//Route Middleware
app.use('/api/user',authRouter);




const PORT = 3000
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))