const mongoose = require('mongoose');

const feedSchema = mongoose.Schema({
    uid:{  //uid can't be unique because a user can give multiple feedback
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    },
    feedtype:{
        type:String,
        require:true
    }
})

const feedModel = mongoose.model('feed', feedSchema);

module.exports = feedModel;