const express = require("express");
const adminRoute = express.Router();
const adminModel = require('../Models/adminModel')

adminRoute.get('/alluser',async (req,res)=>{
    try {
        const user = await adminModel.find();
        return res.json(user);
    } catch (error) {
        return res.json({msg:error})
    }
})

adminRoute.post('/admin',async (req,res)=>{
    try {
        const body = req.body;
        const result = await adminModel.create(body);
        return res.json({msg:"Registration Success"})
    } catch (error) {
    return res.json({msg:error})
    }
})

adminRoute.post('/adlogin',async (req,res)=>{
    try {
        const {email,password}= req.body;
        const result = await adminModel.findOne({email});   //findOne() only takes object
        if(result){
            if(result.password==password){
                return res.json({msg:"Login Successful",id:result._id})
            }else{
                return res.json({msg:"Incorrect Password"})
            }
        }else{
            return res.json({msg:"User Not Found"})
        }

    } catch (error) {
        return res.json({msg:error})
    }
})

module.exports = adminRoute;
