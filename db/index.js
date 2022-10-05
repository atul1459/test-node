const mongoose = require('mongoose');
const Config = require('./../config')

mongoose.connect(Config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
const data = mongoose.connection

data.on('connected', () => {
    console.log('MongoDB Connected')
})
data.on('disconnected', () => {
    console.log('MongoDB DisConnected')
})
data.on('error', (err) => {
    console.error('MongoDB Connected', err)
})

module.exports = { data }