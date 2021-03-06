const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
// register view engine
app.set('view engine', 'ejs')
// app.set('views', __dirname + '/views');
// middleware & static files
app.use(cors())
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '/views')));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(4000,()=>{
    console.log('started')
})