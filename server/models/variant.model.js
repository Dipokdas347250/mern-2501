const {default: mongoose} = require('mongoose');

const variantSchema = new mongoose.Schema(
    {
    
   size:{
    type: String,
    trim: true
   },
   color:{
    type: String,
    trim: true
   },
   sku:{
    type: String,
    trim: true,
    require: [ true, "sku is required"]
   }

   
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Variant", variantSchema);