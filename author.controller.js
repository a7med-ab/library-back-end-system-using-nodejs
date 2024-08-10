import { error } from 'console';
import authorModel from '../../../db/models/authorModel.js'




//--------------
export const addAuthor= async(req,res)=>{
const {name,bio,birthDate,books}= req.body;
const result = await authorModel.create({name,bio,birthDate,books})
res.status(200).json({msg:"done",result})
}
//-------------
export const getAuthors= async(req,res)=>{

    const result = await authorModel.find({})
    res.status(200).json({msg:"done",result})
    
    }
//--------------
export const getAuthorbyId = async(req,res)=>{
    try {
    const {id}= req.params
    const result=  await authorModel.findById(id)
    if(!result){
        res.status(404).json({msg:"internal error"})
    }
    res.status(200).json({msg:"done ,the author data :",result})

    } catch (error) {
        res.status(404).json({msg:"404 not found",})
    }
}
//----------------
export const updateAuthorInfo = async(req,res)=>{
    try {
    const {id}= req.params
    const {name,bio,birthDate,books} = req.body
    const result=  await authorModel.findByIdAndUpdate(id,{name:name,bio:bio,birthDate:birthDate,books:books},{new:true})
    
    if(!result){
        res.status(404).json({msg:"internal error"})
    }
    res.status(200).json({msg:"done ,the author data after updating:",result})

    } catch (error) {
        res.status(404).json({msg:"404 not found"})
    }
}
//------------------


export const deleteAuthor = (req,res)=>{

    const {id}= req.params

       return new Promise((resolve, reject) => {
        authorModel.findByIdAndDelete({_id:id}) 
        .then(data =>{ resolve(data);
            res.status(200).json({msg:"authtor book been deleted "})}
        
        )
        .catch(err=>{
            reject(err)
        })
    })


   
}