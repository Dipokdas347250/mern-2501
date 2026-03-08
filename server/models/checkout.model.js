const mongoose = require("mongoose");
const {Schema} = mongoose;

const shippingSchema = new Schema({
    phone:{
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true,
    },
    district:{
        type: String,
        require: true,
    },
    postcode:{
        type: String
    },
})



const orderSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    totalprice:{
        type: String,
        require: true,
    },
    cart:{
        type: mongoose.Types.ObjectId,
        ref: "Cart"
    },
    shipping : shippingSchema,
    paymentMethod:{
        type: String,
        enum: ["cod ", "online"],
        require: true,
    },
})

module.exports = mongoose.model("Order",orderSchema)