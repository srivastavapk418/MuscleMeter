const express = require("express");
const adminRoute = express.Router();
const adminModel = require('../Models/adminModel')

adminRoute.get('/alluser',async (req,res)=>{
    try {
        const user = await adminModel.find();
        return res.send(user);
    } catch (error) {
        return res.send({msg:error})
    }
})

adminRoute.post('/admin',async (req,res)=>{
    try {
        const body = req.body;
        const result = await adminModel.create(body);
        return res.send({msg:"Registration Success"})
    } catch (error) {
    return res.send({msg:error})
    }
})

adminRoute.post('/adlogin',async (req,res)=>{
    try {
        const {email,password}= req.body;
        const result = await adminModel.findOne({email});   //findOne() only takes object
        if(result){
            if(result.password==password){
                return res.send({msg:"Login Successful",id:result._id})
            }else{
                return res.send({msg:"Incorrect Password"})
            }
        }else{
            return res.send({msg:"User Not Found"})
        }

    } catch (error) {
        return res.send({msg:error})
    }
})

module.exports = adminRoute;
