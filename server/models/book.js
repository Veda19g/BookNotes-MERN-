const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title:String,
    author: String,
    rating: Number,
    date:Date,
    notes: String, 
})

const Book=mongoose.model('Book',bookSchema);

module.exports=Book;