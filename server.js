const express = require('express')
const app = express()
const path = require('path')

// register view engine
app.set('view engine', 'ejs')
// middleware & static files
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
    res.end()
})

app.listen(3000,()=>{
    console.log('started')
})