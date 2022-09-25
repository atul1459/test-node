const express = require('express')
const app = express()
const router = express.Router()



app.get('/', (req, res) => {
    res.send('hello world')
})




app.listen(3000)