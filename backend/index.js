const express = require('express')
const app = express()
const cors = require('cors')
const configDB = require("./config/database")
const routes = require('./config/routes')
const port = 4080
require('dotenv').config()


configDB()
app.use(express.json())
app.use(cors())
app.use(routes)
app.use('/image', express.static('image'))

app.listen(port, ()=>{
    console.log("server is running at port",port)
})
