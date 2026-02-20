const {default: mongoose} = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    } ,
    comment:{
         type:String,
        

    },
    rating:{
         type:Number,
         require: [true,"rating is required"],

    },
    image:{
        type:String,
    }
   

   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Review", reviewSchema);