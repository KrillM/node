const session = require('express-session')
const express = require('express')
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
}))

app.get('/', function(req, res){
    
})