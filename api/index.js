const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT
const app = express()

app.listen(port, () => {
    console.log(`App listen to the port ${port}`)
})