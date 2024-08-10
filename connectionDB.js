import mongoose from "mongoose"

const connectionDB=async()=>{
    return await mongoose.connect("mongodb://localhost:27017/library") // /naMeOFdB
    .then(()=>{
        console.log("db connected")
    }).catch((err)=>{
        console.log("err",err)
    })
        
       
}


export default connectionDB 