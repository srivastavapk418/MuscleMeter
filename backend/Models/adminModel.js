const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;