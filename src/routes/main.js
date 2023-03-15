const express=require('express')
const { route} = require('express/lib/application')
const Review = require("../models/review")

const routes=express.Router()

// routes.get('/',async(request,response)=>{

//     const rev=await Review.findOne({"_id":"640b603df48c796b52560af4"})
//     // console.log(details)
//     response.render("index",{
//         drev:rev
//     });

//     });
// routes.get("/",(req,res)=>{
//     response.render("index")
// })

    routes.post('/process-contact-form',async (request,response)=>{
        console.log("form submitted") 
        console.log(request.body)


        try{
            const data=await  Review.create(request.body)
            console.log(data)
            response.redirect("/")
        }
        catch(e){
            console.log(e)
            response.redirect('/')
        }

        })
        routes.get("/viewreview", async (req, res)=> {   
            const details= await Review.find({})
                  res.render("viewreview", { details: details })
              
          })

    module.exports=routes