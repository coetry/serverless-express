const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.json({ message: "hello world" })
})

app.get('/products', function(req, res) {
    res.json([{ name: 'Macbook', price: 1500 }, { name: 'Backpack', price: 80 }])
})

module.exports = app


