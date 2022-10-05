const express = require('express')
const app = express()
const Config = require('./config')
const router = require('./routes/router')
const db = require('./db')


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



app.use(router)
console.log("===================", Config.app.prefix)

app.listen(process.env.PORT || 3000)

module.exports = app