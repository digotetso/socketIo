const hbs = require('hbs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


var port = 3000

var app = express()

var publicPath = path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(express.static(publicPath))

// app.get('/', (req, res) => {
//     res.render('public')
// })

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})