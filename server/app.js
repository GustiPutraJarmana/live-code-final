const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./router/index')
require('dotenv').config()
// const errorHandling = require('./routers/errorHandling')

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({extended : true}))
    .use('/', router)
    // .use(errorHandling)
    .listen(port, () => {console.log('listerning to port ', port)})