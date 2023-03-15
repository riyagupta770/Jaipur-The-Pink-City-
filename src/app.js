const express=require('express');
const hbs=require('hbs')
const app=express()
const mongoose=require('mongoose');
const routes = require('./routes/main')

const bodyparser=require('body-parser')


app.use(bodyparser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))


app.use('',routes)
app.set('view engine','hbs')
app.set("views","views")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/review",(req,res)=>{
    res.render("review")
})
app.get("/viewreview",(req,res)=>{
    res.render("viewreview")
})
app.get("/fun",(req,res)=>{
    res.render("fun")
})
app.get("/food",(req,res)=>{
    res.render("food")
})
app.get("/historical",(req,res)=>{
    res.render("historical")
})
app.get("/Movie",(req,res)=>{
    res.render("Movie")
})
app.get("/nature",(req,res)=>{
    res.render("nature")
})
app.get("/religious",(req,res)=>{
    res.render("religious")
})





hbs.registerPartials("views/partials")

mongoose.connect("mongodb://0.0.0.0:27017/jaipur",()=>{
    
    console.log("connected")})

mongoose.con

app.listen(process.env.PORT | 5557,()=>{
        console.log('started Port')
    });