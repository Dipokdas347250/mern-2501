const {default: mongoose} = require('mongoose');

const productSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        require: [true,"title is required"],
          trim: true
    },
    sku:{
         type:String,
         trim: true
    },
    slug:{
         type:String,
         trim: true
    },
    description:{
         type:String,
         require: [true,"title is description"],

    },
    image:[String ],
    price:{
        type:Number,
        require: [true,"title is price"],
    },
    diccountprice:{
        type:Number,
        
    }
   
}, {
    timestamps: true,
});

module.exports = mongoose.model("Product", productSchema);