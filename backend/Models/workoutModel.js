const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    uid:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    set:{
        type:String,
        require:true
    },
    replication:{
        type:String,
        require:true
    },
    cat:{
        type:String,
        require:true
    },
    cal:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

const workoutModel = mongoose.model('workout', workoutSchema);

module.exports = workoutModel;