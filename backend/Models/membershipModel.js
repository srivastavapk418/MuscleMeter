const mongoose = require('mongoose');

const membershipSchema = mongoose.Schema({
    email:{ 
        type:String,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    pstatus:{
        type:String,
        require:true
    },
    starting:{
        type:String,
        require:true
    },
    tid:{
        type:String,
        require:true
    },
    ending:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    weight:{
        type:String,
        require:true
    }
})

const membershipModel = mongoose.model('membership', membershipSchema);

module.exports = membershipModel;