const mongoose= require("mongoose")
const Review= mongoose.Schema({

    
        name: String,
        email_id: String,
        describe_your_experience: String,
        rating: Number
    
});

module.exports=mongoose.model("review",Review)