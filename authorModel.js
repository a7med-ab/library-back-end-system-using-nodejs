import { ObjectId } from "bson";
import mongoose from "mongoose";
import { type } from "os";
const authorSchema =new mongoose.Schema({

    name:{type:String, required:true},
    bio:{type:String},
    birthDate:{type:Date},
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true
    }]

})

const authorModel = mongoose.model("author"/*name of model(table)*/,authorSchema)//name of the schema
export default authorModel