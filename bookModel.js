import { ObjectId } from "bson";
import mongoose from "mongoose";
import { type } from "os";
var today = new Date();

const bookSchema =new mongoose.Schema({

title:{type:String, required:true},
content:{type:String, required:true},
author:{type:String, required:true},
publishedDate:{type:Date, default:today}


})

const bookModel = mongoose.model("books"/*name of model(table)*/,bookSchema)//name of the schema
export default bookModel;