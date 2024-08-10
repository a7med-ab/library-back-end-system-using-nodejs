import { error } from 'console';
import bookModel from '../../../db/models/bookModel.js'




//--------------
export const addBook= async(req,res)=>{
const {title,content,author,publishedDate}= req.body;
const result = await bookModel.create({title,content,author,publishedDate})
res.status(200).json({msg:"done",result})
}
//-------------
export const getbooks= async(req,res)=>{

    const result = await bookModel.find({})
    res.status(200).json({msg:"done",result})
    
    }
//--------------
export const getBook = async(req,res)=>{
    try {
    const {id}= req.params
    const result=  await bookModel.findById(id)
    if(!result){
        res.status(404).json({msg:"internal error"})
    }
    res.status(200).json({msg:"done ,the book data :",result})

    } catch (error) {
        res.status(404).json({msg:"404 not found",})
    }
}
//----------------
export const updateBook = async(req,res)=>{
    try {
    const {id}= req.params
    const {title,content,author} = req.body
    const result=  await bookModel.findByIdAndUpdate(id,{title:title,content:content,author:author},{new:true})
    
    if(!result){
        res.status(404).json({msg:"internal error"})
    }
    res.status(200).json({msg:"done ,the book data after updating:",result})

    } catch (error) {
        res.status(404).json({msg:"404 not found"})
    }
}
//------------------


export const deleteBook = (req,res)=>{

    const {id}= req.params

       return new Promise((resolve, reject) => {
         bookModel.findByIdAndDelete({_id:id}) 
        .then(data =>{ resolve(data);
            res.status(200).json({msg:"done book been deleted "})}
        
        )
        .catch(err=>{
            reject(err)
        })
    })


   
}